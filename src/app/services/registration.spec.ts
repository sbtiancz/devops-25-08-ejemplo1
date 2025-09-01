// Pruebas unitarias para RegistrationService - Bohío
import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration';
import { RegistrationForm, DUMMY_REGISTRATION_FORM } from '../models/user.model';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationService]
    });
    service = TestBed.inject(RegistrationService);
  });

  it('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar con datos por defecto', () => {
      const data = service.getCurrentRegistrationData();
      expect(data).toEqual(DUMMY_REGISTRATION_FORM);
    });

    it('debe inicializar con modo asistido desactivado', () => {
      service.assistedMode$.subscribe(mode => {
        expect(mode).toBe(false);
      });
    });

    it('debe inicializar con email no verificado', () => {
      service.emailVerified$.subscribe(verified => {
        expect(verified).toBe(false);
      });
    });

    it('debe inicializar con teléfono no verificado', () => {
      service.phoneVerified$.subscribe(verified => {
        expect(verified).toBe(false);
      });
    });
  });

  describe('Datos de registro', () => {
    it('debe actualizar datos del formulario', () => {
      const newData: Partial<RegistrationForm> = {
        fullName: 'Juan Pérez',
        email: 'juan@email.com'
      };

      service.updateRegistrationData(newData);

      const currentData = service.getCurrentRegistrationData();
      expect(currentData.fullName).toBe('Juan Pérez');
      expect(currentData.email).toBe('juan@email.com');
    });

    it('debe mantener datos existentes al actualizar parcialmente', () => {
      const newData: Partial<RegistrationForm> = {
        fullName: 'María García'
      };

      service.updateRegistrationData(newData);

      const currentData = service.getCurrentRegistrationData();
      expect(currentData.fullName).toBe('María García');
      expect(currentData.phone).toBe(DUMMY_REGISTRATION_FORM.phone);
    });
  });

  describe('Modo asistido', () => {
    it('debe activar modo asistido', () => {
      service.setAssistedMode(true);

      service.assistedMode$.subscribe(mode => {
        expect(mode).toBe(true);
      });
    });

    it('debe desactivar modo asistido', () => {
      service.setAssistedMode(false);

      service.assistedMode$.subscribe(mode => {
        expect(mode).toBe(false);
      });
    });

    it('debe actualizar datos de registro al cambiar modo asistido', () => {
      service.setAssistedMode(true);

      const currentData = service.getCurrentRegistrationData();
      expect(currentData.assistedMode).toBe(true);
    });
  });

  describe('Verificación de email', () => {
    it('debe verificar email', () => {
      service.verifyEmail();

      service.emailVerified$.subscribe(verified => {
        expect(verified).toBe(true);
      });
    });
  });

  describe('Verificación de teléfono', () => {
    it('debe verificar teléfono', () => {
      service.verifyPhone();

      service.phoneVerified$.subscribe(verified => {
        expect(verified).toBe(true);
      });
    });
  });

  describe('Envío de códigos de verificación', () => {
    it('debe enviar código de verificación por email', (done) => {
      const email = 'test@email.com';

      service.sendEmailVerificationCode(email).subscribe(success => {
        expect(success).toBe(true);
        done();
      });
    });

    it('debe enviar código de verificación por SMS', (done) => {
      const phone = '+1-809-555-0123';

      service.sendPhoneVerificationCode(phone).subscribe(success => {
        expect(success).toBe(true);
        done();
      });
    });

    it('debe solicitar verificación por voz', (done) => {
      const phone = '+1-809-555-0123';

      service.requestVoiceVerification(phone).subscribe(success => {
        expect(success).toBe(true);
        done();
      });
    });
  });

  describe('Finalización del registro', () => {
    it('debe completar registro exitosamente', (done) => {
      service.updateRegistrationData({
        fullName: 'Usuario Final',
        email: 'final@email.com',
        phone: '+1-809-555-9999'
      });

      service.completeRegistration().subscribe(user => {
        expect(user).toBeDefined();
        expect(user.fullName).toBe('Usuario Final');
        expect(user.email).toBe('final@email.com');
        expect(user.phone).toBe('+1-809-555-9999');
        done();
      });
    });

    it('debe incluir datos de verificación en usuario final', (done) => {
      service.verifyEmail();
      service.verifyPhone();

      service.completeRegistration().subscribe(user => {
        expect(user.emailVerified).toBe(true);
        expect(user.phoneVerified).toBe(true);
        done();
      });
    });
  });

  describe('Limpieza de datos', () => {
    it('debe limpiar todos los datos del registro', () => {
      // Primero actualizar algunos datos
      service.updateRegistrationData({
        fullName: 'Usuario a Limpiar',
        email: 'limpiar@email.com'
      });

      // Luego limpiar
      service.clearRegistrationData();

      const currentData = service.getCurrentRegistrationData();
      expect(currentData).toEqual(DUMMY_REGISTRATION_FORM);

      service.assistedMode$.subscribe(mode => {
        expect(mode).toBe(false);
      });

      service.emailVerified$.subscribe(verified => {
        expect(verified).toBe(false);
      });

      service.phoneVerified$.subscribe(verified => {
        expect(verified).toBe(false);
      });
    });

    it('debe remover datos del localStorage', () => {
      service.updateRegistrationData({
        fullName: 'Usuario Test'
      });

      service.clearRegistrationData();

      const storedData = localStorage.getItem('bohio_registration_data');
      expect(storedData).toBeNull();
    });
  });
});
