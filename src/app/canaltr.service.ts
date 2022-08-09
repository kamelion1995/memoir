import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canaltransmission } from './canaltransmission';

@Injectable({
  providedIn: 'root'
})
export class CanaltrService {

  private baseUrl="http://localhost:8080/canal";

  constructor( private http:HttpClient) { }

  public regicanal(canal:Canaltransmission):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,canal);
    
  }

  getListCanal():Observable<Canaltransmission[]>{
    return this.http.get<Canaltransmission[]>(`${this.baseUrl}`);
  }

  getCanalById(id:number):Observable<Canaltransmission>{
    return this.http.get<Canaltransmission>(`${this.baseUrl}/${id}`);
}

updatecanal(id:number , canal:Canaltransmission):Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, canal);
}

deleteCanal(id:number):Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}
  

}
