// Rutas de la aplicación Bohío
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta por defecto - Página de bienvenida
  {
    path: '',
    loadComponent: () => import('./pages/welcome/welcome').then(m => m.WelcomeComponent),
    title: 'Bohío - Bienvenido'
  },
  
  // Ruta principal de registro
  {
    path: 'registro',
    loadComponent: () => import('./pages/registration/registration').then(m => m.RegistrationComponent),
    title: 'Bohío - Crear Cuenta',
    children: [
      {
        path: '',
        redirectTo: 'datos-basicos',
        pathMatch: 'full'
      },
      {
        path: 'datos-basicos',
        loadComponent: () => import('./components/registration/basic-info/basic-info').then(m => m.BasicInfoComponent),
        title: 'Bohío - Datos Básicos'
      },
      {
        path: 'verificar-email',
        loadComponent: () => import('./components/registration/email-verification/email-verification').then(m => m.EmailVerificationComponent),
        title: 'Bohío - Verificar Email'
      },
      {
        path: 'verificar-telefono',
        loadComponent: () => import('./components/registration/phone-verification/phone-verification').then(m => m.PhoneVerificationComponent),
        title: 'Bohío - Verificar Teléfono'
      },
      {
        path: 'modo-asistido',
        loadComponent: () => import('./components/registration/assisted-mode/assisted-mode').then(m => m.AssistedModeComponent),
        title: 'Bohío - Modo Asistido'
      }
    ]
  },
  
  // Ruta de fallback para rutas no encontradas
  {
    path: '**',
    redirectTo: ''
  }
];
