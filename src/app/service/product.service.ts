import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

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
}
