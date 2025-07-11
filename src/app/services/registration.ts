// Servicio de Registro - Bohío
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistrationForm, User, DUMMY_REGISTRATION_FORM, DUMMY_USER_DATA } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationDataSubject = new BehaviorSubject<RegistrationForm>(DUMMY_REGISTRATION_FORM);
  private assistedModeSubject = new BehaviorSubject<boolean>(false);
  private emailVerifiedSubject = new BehaviorSubject<boolean>(false);
  private phoneVerifiedSubject = new BehaviorSubject<boolean>(false);
  
  // Observables públicos
  registrationData$: Observable<RegistrationForm> = this.registrationDataSubject.asObservable();
  assistedMode$: Observable<boolean> = this.assistedModeSubject.asObservable();
  emailVerified$: Observable<boolean> = this.emailVerifiedSubject.asObservable();
  phoneVerified$: Observable<boolean> = this.phoneVerifiedSubject.asObservable();
  
  constructor() {}
  
  // Actualizar datos del formulario de registro
  updateRegistrationData(data: Partial<RegistrationForm>): void {
    const currentData = this.registrationDataSubject.value;
    const updatedData = { ...currentData, ...data };
    this.registrationDataSubject.next(updatedData);
    
    // Simular almacenamiento local
    localStorage.setItem('bohio_registration_data', JSON.stringify(updatedData));
  }
  
  // Obtener datos actuales del registro
  getCurrentRegistrationData(): RegistrationForm {
    return this.registrationDataSubject.value;
  }
  
  // Activar/desactivar modo asistido
  setAssistedMode(enabled: boolean): void {
    this.assistedModeSubject.next(enabled);
    this.updateRegistrationData({ assistedMode: enabled });
  }
  
  // Verificar email
  verifyEmail(): void {
    this.emailVerifiedSubject.next(true);
    console.log('Email verificado exitosamente (dummy)');
  }
  
  // Verificar teléfono
  verifyPhone(): void {
    this.phoneVerifiedSubject.next(true);
    console.log('Teléfono verificado exitosamente (dummy)');
  }
  
  // Simular envío de código de verificación por email
  sendEmailVerificationCode(email: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        console.log(`Código de verificación enviado a ${email} (dummy): 123456`);
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }
  
  // Simular envío de código de verificación por SMS
  sendPhoneVerificationCode(phone: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        console.log(`Código SMS enviado a ${phone} (dummy): 654321`);
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }
  
  // Simular llamada de voz para verificación
  requestVoiceVerification(phone: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        console.log(`Llamada de voz iniciada a ${phone} (dummy): 654321`);
        observer.next(true);
        observer.complete();
      }, 2000);
    });
  }
  
  // Simular finalización del registro
  completeRegistration(): Observable<User> {
    return new Observable(observer => {
      setTimeout(() => {
        const registrationData = this.getCurrentRegistrationData();
        const user: User = {
          ...DUMMY_USER_DATA,
          fullName: registrationData.fullName,
          documentId: registrationData.documentId,
          birthDate: registrationData.birthDate,
          email: registrationData.email,
          phone: registrationData.phone,
          emailVerified: this.emailVerifiedSubject.value,
          phoneVerified: this.phoneVerifiedSubject.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        console.log('Usuario registrado exitosamente (dummy):', user);
        observer.next(user);
        observer.complete();
      }, 1500);
    });
  }
  
  // Recuperar datos del almacenamiento local
  recoverRegistrationData(): void {
    const savedData = localStorage.getItem('bohio_registration_data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        this.registrationDataSubject.next(parsedData);
      } catch (error) {
        console.error('Error al recuperar datos del registro:', error);
      }
    }
  }
  
  // Limpiar datos del registro
  clearRegistrationData(): void {
    this.registrationDataSubject.next(DUMMY_REGISTRATION_FORM);
    this.assistedModeSubject.next(false);
    this.emailVerifiedSubject.next(false);
    this.phoneVerifiedSubject.next(false);
    localStorage.removeItem('bohio_registration_data');
  }
}
