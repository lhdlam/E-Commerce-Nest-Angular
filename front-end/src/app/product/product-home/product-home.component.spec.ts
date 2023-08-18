import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomeComponent } from './product-home.component';

describe('ProductListComponent', () => {
  let component: ProductHomeComponent;
  let fixture: ComponentFixture<ProductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
