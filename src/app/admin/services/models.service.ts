import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http: HttpClient) { }
  addNewModel(model) {
    return this.http.post(`http://localhost:3000/models/add`,model);
  }
  listModels(){
    return this.http.get('http://localhost:3000/models/all');

  }
  updateModel(model,id){
    return this.http.put(`http://localhost:3000/models/update/${id}`,model);

  }
  deleteModel(id){
    return this.http.delete(`http://localhost:3000/models/delete/${id}`);

  }
}
