// Componente Banner - UI Kit Bohío
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() dismissible: boolean = true;
  @Input() icon: string = '';
  @Input() actions: { text: string; action: () => void }[] = [];
  @Input() visible: boolean = true;
  
  @Output() dismiss = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<number>();
  
  onDismiss(): void {
    this.visible = false;
    this.dismiss.emit();
  }
  
  onActionClick(index: number): void {
    this.actionClick.emit(index);
    if (this.actions[index]) {
      this.actions[index].action();
    }
  }
  
  // Clases CSS dinámicas
  get bannerClasses(): string {
    const classes = [
      'banner',
      `banner--${this.type}`,
      this.visible ? 'banner--visible' : 'banner--hidden'
    ];
    
    return classes.filter(Boolean).join(' ');
  }
  
  // Íconos por defecto según el tipo
  get defaultIcon(): string {
    if (this.icon) return this.icon;
    
    const icons = {
      success: 'check-circle',
      error: 'x-circle',
      warning: 'alert-triangle',
      info: 'info'
    };
    
    return icons[this.type] || 'info';
  }
}
