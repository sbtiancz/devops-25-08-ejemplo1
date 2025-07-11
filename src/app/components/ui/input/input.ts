// Componente Input - UI Kit Bohío
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
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
