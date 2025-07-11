// Componente de verificación de email - Bohío
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button';
import { InputComponent } from '../../ui/input/input';
import { BannerComponent } from '../../ui/banner/banner';
import { RegistrationService } from '../../../services/registration';
import { DUMMY_VERIFICATION_CODES } from '../../../models/user.model';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent, BannerComponent],
  templateUrl: './email-verification.html',
  styleUrl: './email-verification.scss'
})
export class EmailVerificationComponent {
  verificationForm: FormGroup;
  countdown = 120; // 2 minutos
  canResend = false;
  attempts = 0;
  maxAttempts = 3;
  
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
      if (code === DUMMY_VERIFICATION_CODES.EMAIL_CODE) {
        this.registrationService.verifyEmail();
        this.router.navigate(['/registro/verificar-telefono']);
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
    console.log('Código de verificación enviado (dummy):', DUMMY_VERIFICATION_CODES.EMAIL_CODE);
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
