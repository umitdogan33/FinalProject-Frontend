import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';  
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ButtonModule } from 'primeng/button';

import{ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './componets/cart-summary/cart-summary.component';
import { LoginComponent } from './componets/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './componets/register/register.component';
import { FilterpipeCategoryPipe } from './pipes/filterpipe-category.pipe';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ErrorComponent } from './componets/error/error.component';
import { ProductDetailPipe } from './pipes/product-detail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NaviComponent,
    ProductComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    LoginComponent,
    RegisterComponent,
    FilterpipeCategoryPipe,
    AdminLayoutComponent,
    ErrorComponent,
    ProductDetailPipe
  ],
  imports: [
    MenuModule,
    ConfirmDialogModule,
    SplitButtonModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},DialogService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
