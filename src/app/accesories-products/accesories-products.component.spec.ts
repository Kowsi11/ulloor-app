import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesProductsComponent } from './accesories-products.component';

describe('AccesoriesProductsComponent', () => {
  let component: AccesoriesProductsComponent;
  let fixture: ComponentFixture<AccesoriesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
