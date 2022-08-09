import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Agent } from './agent';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl="http://localhost:8080/agent";

  constructor(private http:HttpClient) { }

  public loginAgent(agent:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/agent/loginagent",agent);
   }

   public loginAdmin(admin:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/agent/loginadmint",admin);
   }
   
}
