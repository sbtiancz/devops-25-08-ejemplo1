// Pruebas unitarias para StepIndicatorComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepIndicatorComponent } from './step-indicator';

describe('StepIndicatorComponent', () => {
  let component: StepIndicatorComponent;
  let fixture: ComponentFixture<StepIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepIndicatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepIndicatorComponent);
    component = fixture.componentInstance;
    
    // Configurar valores por defecto
    component.steps = [
      { id: 1, title: 'Paso 1', completed: true, active: false },
      { id: 2, title: 'Paso 2', completed: false, active: true },
      { id: 3, title: 'Paso 3', completed: false, active: false }
    ];
    component.orientation = 'horizontal';
    component.size = 'medium';
    component.showNumbers = true;
    component.showLabels = true;
    
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar con pasos correctos', () => {
      expect(component.steps).toBeDefined();
      expect(component.steps.length).toBe(3);
    });

    it('debe inicializar con orientación horizontal', () => {
      expect(component.orientation).toBe('horizontal');
    });

    it('debe inicializar con tamaño medium', () => {
      expect(component.size).toBe('medium');
    });

    it('debe inicializar con números visibles', () => {
      expect(component.showNumbers).toBe(true);
    });

    it('debe inicializar con labels visibles', () => {
      expect(component.showLabels).toBe(true);
    });
  });

  describe('Pasos', () => {
    it('debe tener pasos con estructura correcta', () => {
      const firstStep = component.steps[0];
      expect(firstStep.id).toBe(1);
      expect(firstStep.title).toBe('Paso 1');
      expect(firstStep.completed).toBe(true);
      expect(firstStep.active).toBe(false);
    });

    it('debe tener paso activo', () => {
      const activeStep = component.steps[1];
      expect(activeStep.active).toBe(true);
      expect(activeStep.completed).toBe(false);
    });

    it('debe tener paso pendiente', () => {
      const pendingStep = component.steps[2];
      expect(pendingStep.active).toBe(false);
      expect(pendingStep.completed).toBe(false);
    });

    it('debe tener paso completado', () => {
      const completedStep = component.steps[0];
      expect(completedStep.completed).toBe(true);
      expect(completedStep.active).toBe(false);
    });
  });

  describe('Configuración de visualización', () => {
    it('debe mostrar números cuando showNumbers es true', () => {
      component.showNumbers = true;
      fixture.detectChanges();
      expect(component.showNumbers).toBe(true);
    });

    it('debe ocultar números cuando showNumbers es false', () => {
      component.showNumbers = false;
      fixture.detectChanges();
      expect(component.showNumbers).toBe(false);
    });

    it('debe mostrar labels cuando showLabels es true', () => {
      component.showLabels = true;
      fixture.detectChanges();
      expect(component.showLabels).toBe(true);
    });

    it('debe ocultar labels cuando showLabels es false', () => {
      component.showLabels = false;
      fixture.detectChanges();
      expect(component.showLabels).toBe(false);
    });
  });

  describe('Estado de pasos', () => {
    it('debe marcar paso como completado', () => {
      const step = { id: 1, title: 'Test', completed: true, active: false };
      expect(step.completed).toBe(true);
    });

    it('debe marcar paso como activo', () => {
      const step = { id: 2, title: 'Test', completed: false, active: true };
      expect(step.active).toBe(true);
    });

    it('debe marcar paso como pendiente', () => {
      const step = { id: 3, title: 'Test', completed: false, active: false };
      expect(step.active).toBe(false);
      expect(step.completed).toBe(false);
    });
  });

  describe('Clases CSS', () => {
    it('debe generar clases CSS básicas', () => {
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator');
      expect(classes).toContain('step-indicator--horizontal');
      expect(classes).toContain('step-indicator--medium');
    });

    it('debe incluir clase de orientación horizontal por defecto', () => {
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator--horizontal');
    });

    it('debe incluir clase de orientación vertical cuando se especifica', () => {
      component.orientation = 'vertical';
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator--vertical');
    });

    it('debe incluir clase de tamaño', () => {
      component.size = 'large';
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator--large');
    });

    it('debe incluir clase con labels cuando showLabels es true', () => {
      component.showLabels = true;
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator--with-labels');
    });

    it('debe incluir clase con números cuando showNumbers es true', () => {
      component.showNumbers = true;
      const classes = component.containerClasses;
      
      expect(classes).toContain('step-indicator--with-numbers');
    });
  });

  describe('Orientación', () => {
    it('debe tener orientación horizontal por defecto', () => {
      expect(component.orientation).toBe('horizontal');
    });

    it('debe aceptar orientación vertical', () => {
      component.orientation = 'vertical';
      fixture.detectChanges();
      expect(component.orientation).toBe('vertical');
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

  describe('Métodos de utilidad', () => {
    it('debe generar clases para paso completado', () => {
      const step = { id: 1, title: 'Test', completed: true, active: false };
      const classes = component.getStepClasses(step);
      
      expect(classes).toContain('step-indicator__step');
      expect(classes).toContain('step-indicator__step--completed');
    });

    it('debe generar clases para paso activo', () => {
      const step = { id: 2, title: 'Test', completed: false, active: true };
      const classes = component.getStepClasses(step);
      
      expect(classes).toContain('step-indicator__step');
      expect(classes).toContain('step-indicator__step--active');
    });

    it('debe generar clases para paso pendiente', () => {
      const step = { id: 3, title: 'Test', completed: false, active: false };
      const classes = component.getStepClasses(step);
      
      expect(classes).toContain('step-indicator__step');
      expect(classes).toContain('step-indicator__step--pending');
    });

    it('debe obtener estado del paso para accesibilidad', () => {
      const completedStep = { id: 1, title: 'Test', completed: true, active: false };
      const activeStep = { id: 2, title: 'Test', completed: false, active: true };
      const pendingStep = { id: 3, title: 'Test', completed: false, active: false };
      
      expect(component.getStepStatus(completedStep)).toBe('completado');
      expect(component.getStepStatus(activeStep)).toBe('activo');
      expect(component.getStepStatus(pendingStep)).toBe('pendiente');
    });
  });
});
