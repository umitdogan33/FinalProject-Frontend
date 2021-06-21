import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './componets/category/category.component';
import { NaviComponent } from './componets/navi/navi.component';
import { ProductComponent } from './componets/product/product.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import{ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './componets/cart-summary/cart-summary.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';
import { LoginComponent } from './componets/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './componets/register/register.component';
import { FilterpipeCategoryPipe } from './pipes/filterpipe-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NaviComponent,
    ProductComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent,
    FilterpipeCategoryPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
