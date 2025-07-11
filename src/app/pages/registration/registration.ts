// Componente principal de registro - Bohío
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepIndicatorComponent } from '../../components/ui/step-indicator/step-indicator';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterOutlet, StepIndicatorComponent],
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class RegistrationComponent {
  // Pasos del proceso de registro
  steps = [
    { id: 1, title: 'Datos Básicos', completed: false, active: true },
    { id: 2, title: 'Verificar Email', completed: false, active: false },
    { id: 3, title: 'Verificar Teléfono', completed: false, active: false },
    { id: 4, title: 'Completado', completed: false, active: false }
  ];
  
  currentStep = 1;
}
