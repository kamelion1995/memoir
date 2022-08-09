import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Correspondant } from './correspondant';

@Injectable({
  providedIn: 'root'
})
export class CorrespondantService {
  private baseUrl="http://localhost:8080/provenance";

  constructor(private http:HttpClient) { }

  public RegisterUserFromRemote(provenace:Correspondant):Observable<any>{
    return this.http.post<any>("http://localhost:8080/provenance",provenace);
   }
   getListCorrespondance():Observable<Correspondant[]>{
    return this.http.get<Correspondant[]>(`${this.baseUrl}`);
  }

  getCorrespondantById(id:number):Observable<Correspondant>{
    return this.http.get<Correspondant>(`${this.baseUrl}/${id}`);
}

updateCorrespondant(id:number , provenace:Correspondant):Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, provenace);

}
deleteCorrespondant(id:number):Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}


}