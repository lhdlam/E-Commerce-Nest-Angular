import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TitleTransformPipe } from './title.transform.pipe';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductCosmeticsComponent } from './product-cosmetics/product-cosmetics.component';
import { ProductAccessoriesComponent } from './product-accessories/product-accessories.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTravelComponent } from './product-travel/product-travel.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactComponent } from './shared/contact/contact.component';







@NgModule({
  declarations: [
    TitleTransformPipe,
    ProductHomeComponent,
    ProductBagsComponent,
    ProductDetailComponent,
    SubCategoryComponent,
    NavbarComponent,
    ProductClothingComponent,
    ProductCosmeticsComponent,
    ProductAccessoriesComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductTravelComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    IvyCarouselModule,
    ReactiveFormsModule,
  ],
  exports: [NavbarComponent],
})
export class ProductModule {}
