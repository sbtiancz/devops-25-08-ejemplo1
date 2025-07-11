// Componente Button - UI Kit Bohío
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'accent' | 'ghost' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() ariaLabel: string = '';
  
  @Output() click = new EventEmitter<void>();
  
  onClick() {
    if (!this.disabled && !this.loading) {
      this.click.emit();
    }
  }
  
  // Clases CSS dinámicas
  get buttonClasses(): string {
    const classes = [
      'btn',
      `btn--${this.variant}`,
      `btn--${this.size}`,
      this.fullWidth ? 'btn--full-width' : '',
      this.disabled ? 'btn--disabled' : '',
      this.loading ? 'btn--loading' : '',
      this.icon ? `btn--icon-${this.iconPosition}` : ''
    ];
    
    return classes.filter(Boolean).join(' ');
  }
}
