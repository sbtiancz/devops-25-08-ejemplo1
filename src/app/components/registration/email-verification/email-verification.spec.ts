// Pruebas unitarias para EmailVerificationComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailVerificationComponent } from './email-verification';
import { RegistrationService } from '../../../services/registration';
import { Router } from '@angular/router';
import { DUMMY_VERIFICATION_CODES } from '../../../models/user.model';

describe('EmailVerificationComponent', () => {
  let component: EmailVerificationComponent;
  let fixture: ComponentFixture<EmailVerificationComponent>;
  let mockRegistrationService: jasmine.SpyObj<RegistrationService>;
  let mockRouter: jasmine.SpyObj<any>;

  beforeEach(async () => {
    const registrationSpy = jasmine.createSpyObj('RegistrationService', [
      'verifyEmail'
    ]);
    
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [EmailVerificationComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: RegistrationService, useValue: registrationSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailVerificationComponent);
    component = fixture.componentInstance;
    mockRegistrationService = TestBed.inject(RegistrationService) as jasmine.SpyObj<RegistrationService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<any>;
    
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar el formulario correctamente', () => {
      expect(component.verificationForm).toBeDefined();
      expect(component.verificationForm.get('verificationCode')).toBeDefined();
    });

    it('debe inicializar con valores por defecto', () => {
      expect(component.verificationForm.get('verificationCode')?.value).toBe('');
    });

    it('debe inicializar con countdown activo', () => {
      expect(component.countdown).toBeGreaterThan(0);
    });

    it('debe inicializar sin intentos', () => {
      expect(component.attempts).toBe(0);
    });

    it('debe inicializar con countdown de 120 segundos', () => {
      expect(component.countdown).toBe(120);
    });

    it('debe inicializar sin poder reenviar', () => {
      expect(component.canResend).toBe(false);
    });

    it('debe inicializar con máximo de 3 intentos', () => {
      expect(component.maxAttempts).toBe(3);
    });
  });

  describe('Formulario de verificación', () => {
    it('debe validar código de verificación requerido', () => {
      const codeControl = component.verificationForm.get('verificationCode');
      codeControl?.setValue('');
      
      expect(codeControl?.valid).toBe(false);
      expect(codeControl?.errors?.['required']).toBeTruthy();
    });

    it('debe validar patrón del código', () => {
      const codeControl = component.verificationForm.get('verificationCode');
      
      codeControl?.setValue('123');
      expect(codeControl?.valid).toBe(false);
      expect(codeControl?.errors?.['pattern']).toBeTruthy();
      
      codeControl?.setValue('123456');
      expect(codeControl?.valid).toBe(true);
    });
  });

  describe('Verificación de código', () => {
    it('debe verificar código válido', () => {
      component.verificationForm.patchValue({
        verificationCode: DUMMY_VERIFICATION_CODES.EMAIL_CODE
      });

      component.onSubmit();

      expect(mockRegistrationService.verifyEmail).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/registro/verificar-telefono']);
    });

    it('debe manejar código inválido', () => {
      component.verificationForm.patchValue({
        verificationCode: '000000'
      });

      component.onSubmit();

      expect(component.attempts).toBe(1);
    });

    it('debe bloquear formulario después de máximo intentos', () => {
      component.attempts = 2;
      component.verificationForm.patchValue({
        verificationCode: '000000'
      });

      component.onSubmit();

      expect(component.attempts).toBe(3);
      expect(component.verificationForm.disabled).toBe(true);
    });
  });

  describe('Reenvío de código', () => {
    it('debe reenviar código y resetear countdown', () => {
      component.canResend = true;
      component.countdown = 0;

      component.resendCode();

      expect(component.canResend).toBe(false);
      expect(component.countdown).toBe(120);
    });
  });
});
