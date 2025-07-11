// Componente Input - UI Kit Bohío
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { 
  LucideAngularModule, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  CreditCard, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle 
} from 'lucide-angular';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'tel' | 'date' | 'number' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  @Input() hint: string = '';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() fullWidth: boolean = true;
  @Input() ariaLabel: string = '';
  @Input() ariaDescribedBy: string = '';
  
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();
  @Output() change = new EventEmitter<string>();
  
  value: string = '';
  isFocused: boolean = false;
  
  // Registrar iconos de Lucide
  readonly User = User;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Calendar = Calendar;
  readonly CreditCard = CreditCard;
  readonly Lock = Lock;
  readonly Eye = Eye;
  readonly EyeOff = EyeOff;
  readonly AlertCircle = AlertCircle;
  
  // ControlValueAccessor implementation
  onChange = (value: string) => {};
  onTouched = () => {};
  
  writeValue(value: string): void {
    this.value = value || '';
  }
  
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.change.emit(this.value);
  }
  
  onFocus(): void {
    this.isFocused = true;
    this.focus.emit();
  }
  
  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit();
  }
  
  // Generar ID único para el campo
  getFieldId(): string {
    return 'input-' + (this.ariaLabel || this.label).replace(/\s+/g, '-').toLowerCase();
  }
  
  // Generar ID para el hint
  getHintId(): string {
    return 'hint-' + (this.ariaLabel || this.label).replace(/\s+/g, '-').toLowerCase();
  }
  
  // Generar ID para el error
  getErrorId(): string {
    return 'error-' + (this.ariaLabel || this.label).replace(/\s+/g, '-').toLowerCase();
  }
  
  // Generar aria-describedby
  getAriaDescribedBy(): string {
    if (this.error) {
      return this.getErrorId();
    } else if (this.hint) {
      return this.getHintId();
    }
    return '';
  }
  
  // Clases CSS dinámicas
  get inputClasses(): string {
    const classes = [
      'input',
      `input--${this.size}`,
      this.fullWidth ? 'input--full-width' : '',
      this.disabled ? 'input--disabled' : '',
      this.error ? 'input--error' : '',
      this.isFocused ? 'input--focused' : '',
      this.icon ? `input--icon-${this.iconPosition}` : ''
    ];
    
    return classes.filter(Boolean).join(' ');
  }
}
