import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl  = "https://localhost:44308/api/Auth"

  constructor(private httpClient:HttpClient) { }


  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/login",user);
  }


  register(user:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/register",user);
  }


  isAuthencation(){
  if(localStorage.getItem("token")){
    return true;
  }

  else{
    return false;
  }
  }



}
