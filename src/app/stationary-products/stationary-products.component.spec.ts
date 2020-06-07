import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryProductsComponent } from './stationary-products.component';

describe('StationaryProductsComponent', () => {
  let component: StationaryProductsComponent;
  let fixture: ComponentFixture<StationaryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationaryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
