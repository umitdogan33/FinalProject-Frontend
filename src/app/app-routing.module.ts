import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componets/error/error.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';
import { ProductComponent } from './componets/product/product.component';
import { RegisterComponent } from './componets/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent },
  {path:"products", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path: "admin", component:AdminLayoutComponent, canActivate:[LoginGuard], children:[
    {path:"product/add",component:ProductAddComponent},  
]},
{ path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
