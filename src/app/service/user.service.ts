import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }
  apiUrl = environment.BaseUrl;
getByEmail(email:string):Observable<SingleResponseModel<User>>{
  return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl+"Users/email?email="+email)
}

profileUpdate(user:User):Observable<ResponseModel>{
  console.log(user)
  return this.httpClient.post<ResponseModel>(this.apiUrl + 'users/updateprofile', {
    user:{
      'id': user.id,
      'firstName': user.firstName,
      'lastName': user.lastName,
      'email': user.email,
      'status':user.status
    },
    password:user.password
  });
}}
