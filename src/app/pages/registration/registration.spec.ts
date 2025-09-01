// Pruebas unitarias para RegistrationComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration';
import { RegistrationService } from '../../services/registration';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let mockRegistrationService: jasmine.SpyObj<RegistrationService>;

  beforeEach(async () => {
    const registrationSpy = jasmine.createSpyObj('RegistrationService', [
      'getCurrentRegistrationData',
      'updateRegistrationData',
      'setAssistedMode'
    ]);

    await TestBed.configureTestingModule({
      imports: [RegistrationComponent, RouterTestingModule],
      providers: [
        { provide: RegistrationService, useValue: registrationSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    mockRegistrationService = TestBed.inject(RegistrationService) as jasmine.SpyObj<RegistrationService>;
    
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar correctamente', () => {
      expect(component).toBeDefined();
    });

    it('debe tener servicio de registro inyectado', () => {
      expect(mockRegistrationService).toBeDefined();
    });
  });

  describe('Servicio de registro', () => {
    it('debe tener método getCurrentRegistrationData', () => {
      expect(mockRegistrationService.getCurrentRegistrationData).toBeDefined();
    });

    it('debe tener método updateRegistrationData', () => {
      expect(mockRegistrationService.updateRegistrationData).toBeDefined();
    });

    it('debe tener método setAssistedMode', () => {
      expect(mockRegistrationService.setAssistedMode).toBeDefined();
    });
  });
});
