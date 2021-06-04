import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './componets/category/category.component';
import { NaviComponent } from './componets/navi/navi.component';
import { ProductComponent } from './componets/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NaviComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
