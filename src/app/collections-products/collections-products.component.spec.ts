import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsProductsComponent } from './collections-products.component';

describe('CollectionsProductsComponent', () => {
  let component: CollectionsProductsComponent;
  let fixture: ComponentFixture<CollectionsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
