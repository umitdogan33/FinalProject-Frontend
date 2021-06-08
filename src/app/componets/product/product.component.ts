import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded =false;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }
 
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
    this.productService.GetProducts().subscribe((response)=> {
      this.products= response.data;
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
}
