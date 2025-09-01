// Pruebas unitarias para AssistedModeComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AssistedModeComponent } from './assisted-mode';
import { RegistrationService } from '../../../services/registration';
import { Router } from '@angular/router';

describe('AssistedModeComponent', () => {
  let component: AssistedModeComponent;
  let fixture: ComponentFixture<AssistedModeComponent>;
  let mockRegistrationService: jasmine.SpyObj<RegistrationService>;
  let mockRouter: jasmine.SpyObj<any>;

  beforeEach(async () => {
    const registrationSpy = jasmine.createSpyObj('RegistrationService', [
      'setAssistedMode'
    ]);

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [AssistedModeComponent, RouterTestingModule],
      providers: [
        { provide: RegistrationService, useValue: registrationSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistedModeComponent);
    component = fixture.componentInstance;
    mockRegistrationService = TestBed.inject(RegistrationService) as jasmine.SpyObj<RegistrationService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<any>;

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar con modo asistido desactivado', () => {
      expect(component.assistedModeEnabled).toBe(false);
    });

    it('debe inicializar con audio desactivado', () => {
      expect(component.audioEnabled).toBe(false);
    });
  });

  describe('Modo asistido', () => {
    it('debe activar modo asistido', () => {
      component.toggleAssistedMode();

      expect(component.assistedModeEnabled).toBe(true);
      expect(mockRegistrationService.setAssistedMode).toHaveBeenCalledWith(true);
    });

    it('debe desactivar modo asistido', () => {
      component.assistedModeEnabled = true;
      component.toggleAssistedMode();

      expect(component.assistedModeEnabled).toBe(false);
      expect(mockRegistrationService.setAssistedMode).toHaveBeenCalledWith(false);
    });
  });

  describe('Audio', () => {
    it('debe activar audio', () => {
      component.toggleAudio();

      expect(component.audioEnabled).toBe(true);
    });

    it('debe desactivar audio', () => {
      component.audioEnabled = true;
      component.toggleAudio();

      expect(component.audioEnabled).toBe(false);
    });
  });

  describe('Funciones de ayuda', () => {
    it('debe reproducir audio de bienvenida', () => {
      spyOn(console, 'log');
      
      component.playWelcomeAudio();
      
      expect(console.log).toHaveBeenCalledWith('Reproduciendo audio de bienvenida (dummy)');
    });

    it('debe obtener ayuda', () => {
      spyOn(console, 'log');
      
      component.getHelp();
      
      expect(console.log).toHaveBeenCalledWith('Mostrando ayuda contextual (dummy)');
    });

    it('debe contactar soporte', () => {
      spyOn(console, 'log');
      
      component.contactSupport();
      
      expect(console.log).toHaveBeenCalledWith('Conectando con soporte (dummy)');
    });

    it('debe continuar escenario', () => {
      component.continueCenario();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/registro/datos-basicos']);
    });
  });

  describe('Renderizado del DOM', () => {
    it('debe renderizar mensaje básico de trabajo', () => {
      fixture.detectChanges();

      const message = fixture.nativeElement.querySelector('p');
      expect(message).toBeTruthy();
      expect(message.textContent).toContain('assisted-mode works!');
    });
  });
});
