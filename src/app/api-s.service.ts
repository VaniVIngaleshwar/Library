import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { studmodel } from './students/model';

@Injectable({
  providedIn: 'root'
})
export class ApiSService {
  baseurl:string="http://localhost:3000/students";
  constructor(private http:HttpClient) { }

  addstud(data:studmodel){
    return this.http.post<studmodel>("http://localhost:3000/students",data)
  }
  
  
  getstud(){
    return this.http.get<studmodel[]>("http://localhost:3000/students"); 
  }
  
  deletestud(id:number){
    return this.http.delete<studmodel>("http://localhost:3000/students/"+id);
  } 
  
  fetchdata(id:number){
    return this.http.get<studmodel>("http://localhost:3000/students/"+id); 
  }
  
  updatebook(data:studmodel, id:number){
    return this.http.put<studmodel>("http://localhost:3000/students/"+id,data);
  }
  
  searchStudents(name:string){
    return this.http.get<any>(`${this.baseurl}?name=${name}`);
  }
}
