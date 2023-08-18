import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBagsComponent } from './product-bags.component';

describe('ProductBagsComponent', () => {
  let component: ProductBagsComponent;
  let fixture: ComponentFixture<ProductBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
