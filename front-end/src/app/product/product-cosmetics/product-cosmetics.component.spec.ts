import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCosmeticsComponent } from './product-cosmetics.component';

describe('ProductCosmeticsComponent', () => {
  let component: ProductCosmeticsComponent;
  let fixture: ComponentFixture<ProductCosmeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCosmeticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
