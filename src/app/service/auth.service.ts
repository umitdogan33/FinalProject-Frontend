import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelperService:JwtHelperService = new JwtHelperService();
  currentUserId: number;
  currentRoles: string;

  apiUrl  = "https://localhost:44308/api/Auth"

  constructor(private httpClient:HttpClient,private storageService:LocalStorageService,) { }


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


  setCurrentUserId() {
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
    this.currentUserId = Number(decoded[propUserId]);
  }
  setRoles() {
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/role"))[0];
    this.currentRoles = String(decoded[propUserId]);
  }
  getCurrentRoles(): string {
    console.log(this.currentRoles);
    
    return this.currentRoles
  }
  getCurrentUserId(): number {
    return this.currentUserId
  }
  getDecodedToken() {
    try {
      return this.jwtHelperService.decodeToken(this.storageService.GetToken());
    }
    catch (Error) {
      return null;
    }
  }
  async setUserStats() {
    if (this.loggedIn()) {
      this.setCurrentUserId()
      this.setRoles()
    }
  }
  
  logout() {
    this.storageService.Remove("token");
  }
  loggedIn(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(this.storageService.GetToken());
    return !isExpired;
  }
}
