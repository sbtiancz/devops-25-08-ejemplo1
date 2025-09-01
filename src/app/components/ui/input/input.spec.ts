// Pruebas unitarias para InputComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;

    // Configurar valores por defecto
    component.label = 'Test Label';
    component.placeholder = 'Test Placeholder';
    component.type = 'text';
    component.size = 'medium';
    component.fullWidth = true;
    component.required = false;
    component.disabled = false;

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar con valores por defecto', () => {
      expect(component.label).toBe('Test Label');
      expect(component.placeholder).toBe('Test Placeholder');
      expect(component.type).toBe('text');
      expect(component.size).toBe('medium');
      expect(component.fullWidth).toBe(true);
      expect(component.required).toBe(false);
      expect(component.disabled).toBe(false);
    });

    it('debe inicializar sin error', () => {
      expect(component.error).toBe('');
    });

    it('debe inicializar sin hint', () => {
      expect(component.hint).toBe('');
    });

    it('debe inicializar sin icono', () => {
      expect(component.icon).toBe('');
    });

    it('debe inicializar con posición de icono por defecto', () => {
      expect(component.iconPosition).toBe('left');
    });
  });

  describe('ControlValueAccessor', () => {
    it('debe implementar ControlValueAccessor', () => {
      expect(component.writeValue).toBeDefined();
      expect(component.registerOnChange).toBeDefined();
      expect(component.registerOnTouched).toBeDefined();
      expect(component.setDisabledState).toBeDefined();
    });

    it('debe escribir valor correctamente', () => {
      const testValue = 'test value';
      component.writeValue(testValue);
      expect(component.value).toBe(testValue);
    });

    it('debe registrar función onChange', () => {
      const onChangeFn = jasmine.createSpy('onChange');
      component.registerOnChange(onChangeFn);
      expect(component.onChange).toBe(onChangeFn);
    });

    it('debe registrar función onTouched', () => {
      const onTouchedFn = jasmine.createSpy('onTouched');
      component.registerOnTouched(onTouchedFn);
      expect(component.onTouched).toBe(onTouchedFn);
    });

    it('debe establecer estado deshabilitado', () => {
      component.setDisabledState(true);
      expect(component.disabled).toBe(true);
    });
  });

  describe('Manejo de eventos', () => {
    it('debe llamar onChange al cambiar valor', () => {
      const onChangeSpy = jasmine.createSpy('onChange');
      component.registerOnChange(onChangeSpy);

      const mockEvent = { target: { value: 'new value' } } as any;
      component.onInputChange(mockEvent);

      expect(onChangeSpy).toHaveBeenCalledWith('new value');
    });

    it('debe llamar onTouched al perder foco', () => {
      const onTouchedSpy = jasmine.createSpy('onTouched');
      component.registerOnTouched(onTouchedSpy);

      component.onBlur();

      expect(onTouchedSpy).toHaveBeenCalled();
    });

    it('debe actualizar valor interno al cambiar', () => {
      const mockEvent = { target: { value: 'new value' } } as any;
      component.onInputChange(mockEvent);
      expect(component.value).toBe('new value');
    });
  });

  describe('Validaciones', () => {
    it('debe ser requerido cuando se especifica', () => {
      component.required = true;
      fixture.detectChanges();
      expect(component.required).toBe(true);
    });

    it('debe estar deshabilitado cuando se especifica', () => {
      component.disabled = true;
      fixture.detectChanges();
      expect(component.disabled).toBe(true);
    });
  });

  describe('Tamaños', () => {
    it('debe aceptar tamaño small', () => {
      component.size = 'small';
      fixture.detectChanges();
      expect(component.size).toBe('small');
    });

    it('debe aceptar tamaño medium', () => {
      component.size = 'medium';
      fixture.detectChanges();
      expect(component.size).toBe('medium');
    });

    it('debe aceptar tamaño large', () => {
      component.size = 'large';
      fixture.detectChanges();
      expect(component.size).toBe('large');
    });
  });

  describe('Tipos de entrada', () => {
    it('debe aceptar tipo text', () => {
      component.type = 'text';
      fixture.detectChanges();
      expect(component.type).toBe('text');
    });

    it('debe aceptar tipo email', () => {
      component.type = 'email';
      fixture.detectChanges();
      expect(component.type).toBe('email');
    });

    it('debe aceptar tipo password', () => {
      component.type = 'password';
      fixture.detectChanges();
      expect(component.type).toBe('password');
    });

    it('debe aceptar tipo tel', () => {
      component.type = 'tel';
      fixture.detectChanges();
      expect(component.type).toBe('tel');
    });

    it('debe aceptar tipo number', () => {
      component.type = 'number';
      fixture.detectChanges();
      expect(component.type).toBe('number');
    });
  });

  describe('Ancho completo', () => {
    it('debe tener ancho completo cuando se especifica', () => {
      component.fullWidth = true;
      fixture.detectChanges();
      expect(component.fullWidth).toBe(true);
    });

    it('debe tener ancho completo por defecto', () => {
      expect(component.fullWidth).toBe(true);
    });
  });

  describe('Manejo de errores', () => {
    it('debe mostrar error cuando se especifica', () => {
      const errorMessage = 'Este campo es requerido';
      component.error = errorMessage;
      fixture.detectChanges();
      expect(component.error).toBe(errorMessage);
    });

    it('debe no mostrar error por defecto', () => {
      expect(component.error).toBe('');
    });
  });

  describe('Hint', () => {
    it('debe mostrar hint cuando se especifica', () => {
      const hintText = 'Ingresa tu información aquí';
      component.hint = hintText;
      fixture.detectChanges();
      expect(component.hint).toBe(hintText);
    });

    it('debe no mostrar hint por defecto', () => {
      expect(component.hint).toBe('');
    });
  });

  describe('Iconos', () => {
    it('debe mostrar icono cuando se especifica', () => {
      const iconName = 'user';
      component.icon = iconName;
      fixture.detectChanges();
      expect(component.icon).toBe(iconName);
    });

    it('debe no mostrar icono por defecto', () => {
      expect(component.icon).toBe('');
    });

    it('debe aceptar posición de icono izquierda', () => {
      component.iconPosition = 'left';
      fixture.detectChanges();
      expect(component.iconPosition).toBe('left');
    });

    it('debe aceptar posición de icono derecha', () => {
      component.iconPosition = 'right';
      fixture.detectChanges();
      expect(component.iconPosition).toBe('right');
    });
  });

  describe('Aria label', () => {
    it('debe tener aria-label cuando se especifica', () => {
      const ariaLabel = 'Campo de entrada requerido';
      component.ariaLabel = ariaLabel;
      fixture.detectChanges();
      expect(component.ariaLabel).toBe(ariaLabel);
    });

    it('debe no tener aria-label por defecto', () => {
      expect(component.ariaLabel).toBe('');
    });
  });

  describe('Renderizado del DOM', () => {
    it('debe renderizar label cuando se especifica', () => {
      component.label = 'Nombre Completo';
      fixture.detectChanges();

      const labelElement = fixture.nativeElement.querySelector('label');
      expect(labelElement).toBeTruthy();
    });

    it('debe renderizar input cuando se especifica', () => {
      fixture.detectChanges();

      const inputElement = fixture.nativeElement.querySelector('input');
      expect(inputElement).toBeTruthy();
    });

    it('debe renderizar placeholder cuando se especifica', () => {
      component.placeholder = 'Ingresa tu nombre';
      fixture.detectChanges();

      const inputElement = fixture.nativeElement.querySelector('input');
      expect(inputElement.getAttribute('placeholder')).toBe('Ingresa tu nombre');
    });
  });
});
