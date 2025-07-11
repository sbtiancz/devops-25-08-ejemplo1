// Componente de información básica - Bohío
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button';
import { InputComponent } from '../../ui/input/input';
import { BannerComponent } from '../../ui/banner/banner';
import { RegistrationService } from '../../../services/registration';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ButtonComponent, InputComponent, BannerComponent],
  templateUrl: './basic-info.html',
  styleUrl: './basic-info.scss'
})
export class BasicInfoComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitting = false;
  showHelpBanner = true;
  isDevelopment = true; // Cambiar a false en producción
  
  // Acciones para el banner de ayuda
  helpBannerActions = [
    {
      text: 'Activar modo asistido',
      action: () => this.goToAssistedMode()
    }
  ];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', [
        Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      ]],
      phone: ['', [
        Validators.required, 
        Validators.pattern(/^\+?1-?8\d{2}-?\d{3}-?\d{4}$/)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]]
    });
  }
  
  ngOnInit(): void {
    // Recuperar datos guardados si existen
    this.registrationService.recoverRegistrationData();
    
    // Suscribirse a cambios en los datos de registro
    this.registrationService.registrationData$.subscribe(data => {
      if (data.fullName || data.phone || data.email) {
        this.registrationForm.patchValue({
          fullName: data.fullName,
          phone: data.phone,
          email: data.email
        });
      }
    });
  }
  
  // Obtener error específico de un campo
  getFieldError(fieldName: string): string {
    const field = this.registrationForm.get(fieldName);
    
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldDisplayName(fieldName)} es requerido`;
      }
      
      if (field.errors['minlength']) {
        return `${this.getFieldDisplayName(fieldName)} debe tener al menos ${field.errors['minlength'].requiredLength} caracteres`;
      }
      
      if (field.errors['email']) {
        return 'Ingresa un correo electrónico válido';
      }
      
      if (field.errors['pattern']) {
        switch (fieldName) {
          case 'fullName':
            return 'El nombre solo puede contener letras y espacios';
          case 'phone':
            return 'Ingresa un número de teléfono válido (ej: +1-809-123-4567)';
          default:
            return 'Formato inválido';
        }
      }
    }
    
    return '';
  }
  
  // Obtener nombre de display del campo
  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      fullName: 'El nombre completo',
      phone: 'El número de celular',
      email: 'El correo electrónico'
    };
    
    return displayNames[fieldName] || fieldName;
  }
  
  // Enviar formulario
  onSubmit(): void {
    if (this.registrationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.get(key)?.markAsTouched();
      });
      
      // Simular delay de procesamiento
      setTimeout(() => {
        this.registrationService.updateRegistrationData(this.registrationForm.value);
        this.isSubmitting = false;
        
        // Navegar al siguiente paso (crear contraseña - siguiente historia de usuario)
        this.router.navigate(['/registro/verificar-email']);
      }, 1000);
    } else {
      // Marcar campos como touched para mostrar errores
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.get(key)?.markAsTouched();
      });
    }
  }
  
  // Rellenar datos dummy para desarrollo
  fillDummyData(): void {
    this.registrationForm.patchValue({
      fullName: 'María Esperanza Rodríguez',
      phone: '+1-809-555-0123',
      email: 'maria.esperanza@email.com'
    });
    
    // Marcar campos como touched para activar validación
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.get(key)?.markAsTouched();
    });
  }
  
  // Regresar a la página anterior
  goBack(): void {
    this.router.navigate(['/']);
  }
  
  // Ir al modo asistido
  goToAssistedMode(): void {
    this.router.navigate(['/registro/modo-asistido']);
  }
  
  // Ocultar banner de ayuda
  dismissHelpBanner(): void {
    this.showHelpBanner = false;
  }
}
