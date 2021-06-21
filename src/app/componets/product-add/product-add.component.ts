import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddFrom:FormGroup;
  constructor(private fromBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  

  createProductAddForm(){
    this.productAddFrom=this.fromBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required],
    });
  }


  add(){
  if(this.productAddFrom.valid){
  let productModel = Object.assign({},this.productAddFrom.value)
  this.productService.add(productModel).subscribe(response=> {
    console.log(response)
    this.toastrService.success(response.message,"başarılı")
  },responseError=>{
   if(responseError.error.Errors.length>0)  
   {
     for (let i = 0; i < responseError.error.Errors.length; i++) {
       
      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"doğrulama hatası")
     }
   }
  })    
  

  }else{
    this.toastrService.error("Formunuz eksik","dikkat");
  }
  }

}
