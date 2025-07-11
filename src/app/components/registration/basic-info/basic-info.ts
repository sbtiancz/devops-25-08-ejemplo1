// Componente de información básica - Bohío
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button';
import { InputComponent } from '../../ui/input/input';
import { BannerComponent } from '../../ui/banner/banner';
import { RegistrationService } from '../../../services/registration';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent, BannerComponent],
  templateUrl: './basic-info.html',
  styleUrl: './basic-info.scss'
})
export class BasicInfoComponent {
  registrationForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      documentId: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{7}-\d{1}$/)]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?1-?8\d{2}-?\d{3}-?\d{4}$/)]]
    });
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationService.updateRegistrationData(this.registrationForm.value);
      this.router.navigate(['/registro/verificar-email']);
    }
  }
  
  // Datos dummy para ayudar en el desarrollo
  fillDummyData() {
    this.registrationForm.patchValue({
      fullName: 'María Esperanza Rodríguez',
      documentId: '001-1234567-8',
      birthDate: '1985-03-15',
      email: 'maria.esperanza@email.com',
      phone: '+1-809-555-0123'
    });
  }
}
