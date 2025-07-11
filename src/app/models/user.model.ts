// Modelo de Usuario - Bohío
export interface User {
  id?: string;
  fullName: string;
  documentId: string;
  birthDate: string;
  email: string;
  phone: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Modelo para el formulario de registro
export interface RegistrationForm {
  fullName: string;
  phone: string;
  email: string;
  documentId?: string;
  birthDate?: string;
  currentStep: number;
  assistedMode: boolean;
}

// Modelo para códigos de verificación
export interface VerificationCode {
  code: string;
  expiresAt: Date;
  attempts: number;
  maxAttempts: number;
}

// Tipos de usuario objetivo según MVP
export enum UserProfile {
  MIGRANT = 'migrant',
  LOW_DIGITAL_LITERACY = 'low_digital_literacy',
  INFORMAL_WORKER = 'informal_worker',
  RURAL_RESIDENT = 'rural_resident',
  SENIOR_CITIZEN = 'senior_citizen',
  VISUALLY_IMPAIRED = 'visually_impaired'
}

// Datos dummy para desarrollo
export const DUMMY_USER_DATA: User = {
  id: '12345678-1234-1234-1234-123456789012',
  fullName: 'María Esperanza Rodríguez',
  documentId: '001-1234567-8',
  birthDate: '1985-03-15',
  email: 'maria.esperanza@email.com',
  phone: '+1-809-555-0123',
  emailVerified: false,
  phoneVerified: false,
  createdAt: new Date('2024-01-01T00:00:00.000Z'),
  updatedAt: new Date('2024-01-01T00:00:00.000Z')
};

// Datos dummy para formulario
export const DUMMY_REGISTRATION_FORM: RegistrationForm = {
  fullName: '',
  documentId: '',
  birthDate: '',
  email: '',
  phone: '',
  currentStep: 1,
  assistedMode: false
};

// Códigos de verificación dummy
export const DUMMY_VERIFICATION_CODES = {
  EMAIL_CODE: '123456',
  PHONE_CODE: '654321',
  EXPIRATION_TIME: 5 * 60 * 1000 // 5 minutos en milisegundos
}; 