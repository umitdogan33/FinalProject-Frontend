import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { ProductDetail } from 'src/app/models/productDetail';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  productDetails:ProductDetail[]=[];
  dataLoaded =false;
  filterText="";
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }
 
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=> {
     if(params["categoryId"]){
     this.GetProductsByCategory(params["categoryId"]);
     }

     else{
     this.GetProducts();
     }
   })
  }
//aktifleştirilmiş root
  GetProducts(){
    this.productService.GetProductDetails().subscribe((response)=> {
      this.productDetails= response.data;
      this.dataLoaded =true;
    });
  }

  GetProductsByCategory(categoryId:number){
    this.productService.GetPrductsByCategory(categoryId).subscribe((response)=> {
      this.products= response.data;
      console.log(response)
      this.dataLoaded =true;
    });
  }

  addToCart(product:ProductDetail){
    this.cartService.addToCart(product);
    this.toastrService.success("sepete eklendi")
  }

  


}
