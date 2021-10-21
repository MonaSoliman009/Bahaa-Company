import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getProfile(data) {
    return this.http.post('http://localhost:3000/user/profile',data);
  }
  uploadImage(data){
    return this.http.post('http://localhost:3000/upload/api/images',data);

  }
  resetPassword(id,data){
    return this.http.post('http://localhost:3000/user/resetPassword/'+id,data);

  }
}
