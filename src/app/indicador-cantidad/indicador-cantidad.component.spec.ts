import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorCantidadComponent } from './indicador-cantidad.component';

describe('IndicadorCantidadComponent', () => {
  let component: IndicadorCantidadComponent;
  let fixture: ComponentFixture<IndicadorCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicadorCantidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicadorCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
