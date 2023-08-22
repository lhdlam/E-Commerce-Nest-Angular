import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";

import { ProductAccessoriesComponent } from "./product-accessories/product-accessories.component";
import { ProductBagsComponent } from "./product-bags/product-bags.component";
import { ProductClothingComponent } from "./product-clothing/product-clothing.component";
import { ProductCosmeticsComponent } from "./product-cosmetics/product-cosmetics.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

import { ProductHomeComponent } from "./product-home/product-home.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";
import { ProductTravelComponent } from "./product-travel/product-travel.component";

const routes: Routes = [
    {
        path: 'create',
        component: ProductCreateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: ProductEditComponent
    },
    {
        path: 'bags/:id',
        component: SubCategoryComponent
    },
    {
        path: '',
        component: ProductHomeComponent
    },
    {
        path: 'bags',
        component: ProductBagsComponent
    },
    {
        path: 'clothing',
        component: ProductClothingComponent
    },
    {
        path: 'clothing/:id',
        component: SubCategoryComponent
    },
    {
        path: 'accessories',
        component: ProductAccessoriesComponent
    },
    {
        path: 'accessories/:id',
        component: SubCategoryComponent
    },
    {
        path: 'cosmetics',
        component: ProductCosmeticsComponent
    },
    {
        path: 'cosmetics/:id',
        component: SubCategoryComponent
    },

    {
        path: 'travel',
        component: ProductTravelComponent
    },
    {
        path: 'travel/:id',
        component: SubCategoryComponent
    },

    {
        path: 'detail/:id',
        component: ProductDetailComponent
    },
    
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}