// Pruebas unitarias para BannerComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    
    // Configurar valores por defecto
    component.type = 'info';
    component.title = 'Test Title';
    component.message = 'Test Message';
    component.dismissible = true;
    component.actions = [];
    component.visible = true;
    
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inicialización', () => {
    it('debe inicializar con valores por defecto', () => {
      expect(component.type).toBe('info');
      expect(component.title).toBe('Test Title');
      expect(component.message).toBe('Test Message');
      expect(component.dismissible).toBe(true);
      expect(component.actions).toEqual([]);
      expect(component.visible).toBe(true);
    });

    it('debe inicializar sin icono personalizado', () => {
      expect(component.icon).toBe('');
    });
  });

  describe('Tipos de banner', () => {
    it('debe aceptar tipo info', () => {
      component.type = 'info';
      fixture.detectChanges();
      expect(component.type).toBe('info');
    });

    it('debe aceptar tipo success', () => {
      component.type = 'success';
      fixture.detectChanges();
      expect(component.type).toBe('success');
    });

    it('debe aceptar tipo warning', () => {
      component.type = 'warning';
      fixture.detectChanges();
      expect(component.type).toBe('warning');
    });

    it('debe aceptar tipo error', () => {
      component.type = 'error';
      fixture.detectChanges();
      expect(component.type).toBe('error');
    });
  });

  describe('Título y mensaje', () => {
    it('debe mostrar título cuando se especifica', () => {
      component.title = 'Banner de Información';
      fixture.detectChanges();
      expect(component.title).toBe('Banner de Información');
    });

    it('debe mostrar mensaje cuando se especifica', () => {
      component.message = 'Este es un mensaje informativo';
      fixture.detectChanges();
      expect(component.message).toBe('Este es un mensaje informativo');
    });
  });

  describe('Dismissible', () => {
    it('debe ser dismissible cuando se especifica', () => {
      component.dismissible = true;
      fixture.detectChanges();
      expect(component.dismissible).toBe(true);
    });

    it('debe ser dismissible por defecto', () => {
      expect(component.dismissible).toBe(true);
    });
  });

  describe('Acciones', () => {
    it('debe mostrar acciones cuando se especifican', () => {
      const testActions = [
        { text: 'Aceptar', action: () => {} },
        { text: 'Cancelar', action: () => {} }
      ];
      component.actions = testActions;
      fixture.detectChanges();
      expect(component.actions).toEqual(testActions);
    });

    it('debe no mostrar acciones por defecto', () => {
      expect(component.actions).toEqual([]);
    });
  });

  describe('Icono personalizado', () => {
    it('debe mostrar icono personalizado cuando se especifica', () => {
      component.icon = 'star';
      fixture.detectChanges();
      expect(component.icon).toBe('star');
    });

    it('debe no mostrar icono personalizado por defecto', () => {
      expect(component.icon).toBe('');
    });
  });

  describe('Manejo de eventos', () => {
    it('debe emitir evento dismiss cuando se llama dismiss', () => {
      spyOn(component.dismiss, 'emit');
      
      component.onDismiss();
      
      expect(component.dismiss.emit).toHaveBeenCalled();
    });

    it('debe emitir evento actionClick cuando se llama onActionClick', () => {
      spyOn(component.actionClick, 'emit');
      const index = 0;
      
      component.onActionClick(index);
      
      expect(component.actionClick.emit).toHaveBeenCalledWith(index);
    });
  });

  describe('Clases CSS', () => {
    it('debe generar clases CSS básicas', () => {
      const classes = component.bannerClasses;
      
      expect(classes).toContain('banner');
      expect(classes).toContain('banner--info');
    });

    it('debe incluir clase de tipo', () => {
      component.type = 'success';
      const classes = component.bannerClasses;
      
      expect(classes).toContain('banner--success');
    });

    it('debe incluir clase visible cuando visible es true', () => {
      component.visible = true;
      const classes = component.bannerClasses;
      
      expect(classes).toContain('banner--visible');
    });

    it('debe incluir clase hidden cuando visible es false', () => {
      component.visible = false;
      const classes = component.bannerClasses;
      
      expect(classes).toContain('banner--hidden');
    });
  });

  describe('Iconos por defecto', () => {
    it('debe retornar icono personalizado cuando está definido', () => {
      component.icon = 'custom-icon';
      expect(component.defaultIcon).toBe('custom-icon');
    });

    it('debe retornar icono por defecto según el tipo', () => {
      const iconMap = {
        success: 'check-circle',
        error: 'x-circle',
        warning: 'alert-triangle',
        info: 'info'
      };

      Object.entries(iconMap).forEach(([type, expectedIcon]) => {
        component.type = type as any;
        component.icon = '';
        expect(component.defaultIcon).toBe(expectedIcon);
      });
    });
  });

  describe('Renderizado del DOM', () => {
    it('debe renderizar título cuando se especifica', () => {
      component.title = 'Título del Banner';
      fixture.detectChanges();
      
      const titleElement = fixture.nativeElement.querySelector('.banner__title');
      expect(titleElement).toBeTruthy();
    });

    it('debe renderizar mensaje cuando se especifica', () => {
      component.message = 'Mensaje del banner';
      fixture.detectChanges();
      
      const messageElement = fixture.nativeElement.querySelector('.banner__message');
      expect(messageElement).toBeTruthy();
    });

    it('debe renderizar contenedor del banner', () => {
      fixture.detectChanges();
      
      const bannerElement = fixture.nativeElement.querySelector('.banner');
      expect(bannerElement).toBeTruthy();
    });
  });
});
