// Componente de verificación de teléfono - Bohío
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../services/registration';
import { DUMMY_VERIFICATION_CODES } from '../../../models/user.model';

@Component({
  selector: 'app-phone-verification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './phone-verification.html',
  styleUrl: './phone-verification.scss'
})
export class PhoneVerificationComponent {
  verificationForm: FormGroup;
  countdown = 120; // 2 minutos
  canResend = false;
  attempts = 0;
  maxAttempts = 3;
  useVoiceCall = false;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.verificationForm = this.fb.group({
      verificationCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
    
    this.startCountdown();
  }
  
  onSubmit() {
    if (this.verificationForm.valid) {
      const code = this.verificationForm.get('verificationCode')?.value;
      
      // Verificar código dummy
      if (code === DUMMY_VERIFICATION_CODES.PHONE_CODE) {
        this.registrationService.verifyPhone();
        this.router.navigate(['/']); // Redirigir a página principal al completar
      } else {
        this.attempts++;
        if (this.attempts >= this.maxAttempts) {
          // Bloquear por seguridad
          this.verificationForm.disable();
        }
      }
    }
  }
  
  resendCode() {
    this.canResend = false;
    this.countdown = 120;
    this.startCountdown();
    // Simular envío de código
    console.log('Código de verificación SMS enviado (dummy):', DUMMY_VERIFICATION_CODES.PHONE_CODE);
  }
  
  requestVoiceCall() {
    this.useVoiceCall = true;
    this.resendCode();
    console.log('Llamada de voz solicitada con código:', DUMMY_VERIFICATION_CODES.PHONE_CODE);
  }
  
  private startCountdown() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.canResend = true;
        clearInterval(interval);
      }
    }, 1000);
  }
}
