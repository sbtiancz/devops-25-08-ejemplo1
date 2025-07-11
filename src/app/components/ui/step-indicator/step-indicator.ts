// Componente Step Indicator - UI Kit Bohío
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Step {
  id: number;
  title: string;
  completed: boolean;
  active: boolean;
}

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-indicator.html',
  styleUrl: './step-indicator.scss'
})
export class StepIndicatorComponent {
  @Input() steps: Step[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showLabels: boolean = true;
  @Input() showNumbers: boolean = true;
  
  // Clases CSS dinámicas para el contenedor
  get containerClasses(): string {
    const classes = [
      'step-indicator',
      `step-indicator--${this.orientation}`,
      `step-indicator--${this.size}`,
      this.showLabels ? 'step-indicator--with-labels' : '',
      this.showNumbers ? 'step-indicator--with-numbers' : ''
    ];
    
    return classes.filter(Boolean).join(' ');
  }
  
  // Obtener clases para cada paso
  getStepClasses(step: Step): string {
    const classes = [
      'step-indicator__step',
      step.completed ? 'step-indicator__step--completed' : '',
      step.active ? 'step-indicator__step--active' : '',
      !step.completed && !step.active ? 'step-indicator__step--pending' : ''
    ];
    
    return classes.filter(Boolean).join(' ');
  }
  
  // Obtener estado del paso para accesibilidad
  getStepStatus(step: Step): string {
    if (step.completed) return 'completado';
    if (step.active) return 'activo';
    return 'pendiente';
  }
}
