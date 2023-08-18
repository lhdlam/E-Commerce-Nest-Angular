import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./product/product.module').then(
        a => a.ProductModule
      )
  }, 
  {
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module').then(
        a => a.AuthModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
