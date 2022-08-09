import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courrier } from './courrier';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  private baseUrl="http://localhost:8080/Courrier";

  

  constructor(private http:HttpClient) { }

  getListCourrier():Observable<Courrier[]>{
    return this.http.get<Courrier[]>(`${this.baseUrl}`);
  }

  public Regicourier(courrier:Courrier):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,courrier);
    
  }
  deletecourrier(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCourrierById(id:number):Observable<Courrier>{
    return this.http.get<Courrier>(`${this.baseUrl}/${id}`);
}

updateCourrier(id:number , courrier:Courrier):Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, courrier);
}

    

}
