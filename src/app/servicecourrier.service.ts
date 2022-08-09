import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicecourrierService {
  private baseUrl="http://localhost:8080/Service";

  

  constructor(private http:HttpClient) { }

  getListServiceCourrier():Observable<Service[]>{
    return this.http.get<Service[]>(`${this.baseUrl}`);
  }

  ajoutService(service:Service):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,service)
  }
  deleteService(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getServiceById(id:number):Observable<Service>{
    return this.http.get<Service>(`${this.baseUrl}/${id}`);
}

updateService(id:number , service:Service):Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, service);
}


}
