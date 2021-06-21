import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44308/api/"

  GetProducts():Observable<ListResponseModel<Product>>{
    let newPath= this.apiUrl+"Products/GetAll";
    
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  

}

GetPrductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
 let newPath= this.apiUrl+"Products/GetByCategory?Categoryıd="+categoryId
  return this.httpClient.get<ListResponseModel<Product>>(newPath);

}


add(product:Product):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"Products/Add",product)  
}


  GetProductDetails():Observable<ListResponseModel<ProductDetail>>{
    let newPath= this.apiUrl+"Products/GetAllDetails";
    
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  

}

}
