// Componente de modo asistido - Bohío
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../services/registration';

@Component({
  selector: 'app-assisted-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assisted-mode.html',
  styleUrl: './assisted-mode.scss'
})
export class AssistedModeComponent {
  assistedModeEnabled = false;
  audioEnabled = false;
  
  constructor(
    private router: Router,
    private registrationService: RegistrationService
  ) {}
  
  toggleAssistedMode() {
    this.assistedModeEnabled = !this.assistedModeEnabled;
    this.registrationService.setAssistedMode(this.assistedModeEnabled);
  }
  
  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    if (this.audioEnabled) {
      this.playWelcomeAudio();
    }
  }
  
  playWelcomeAudio() {
    // Simular reproducción de audio
    console.log('Reproduciendo audio de bienvenida (dummy)');
  }
  
  getHelp() {
    // Simular ayuda contextual
    console.log('Mostrando ayuda contextual (dummy)');
  }
  
  contactSupport() {
    // Simular contacto con soporte
    console.log('Conectando con soporte (dummy)');
  }
  
  continueCenario() {
    this.router.navigate(['/registro/datos-basicos']);
  }
}
