import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClothingComponent } from './product-clothing.component';

describe('ProductClothingComponent', () => {
  let component: ProductClothingComponent;
  let fixture: ComponentFixture<ProductClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
