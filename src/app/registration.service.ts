import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './agent';
import { Profile } from './profile';
import { Service } from './service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private baseUrl="http://localhost:8080/agent";

  private baseUrl1= "http://localhost:8080/utilisateur";

  private bases="http://localhost:8080/profile";

  constructor(private https:HttpClient) { }

  public Registeragent(agent:Agent):Observable<any>{
    return this.https.post<any>(`${this.baseUrl}`,agent);
    
  }

  getListProfile():Observable<Profile[]>{
    return this.https.get<Profile[]>(`${this.bases}`);
  }

  public registerUser(user:User):Observable<any>{
    return this.https.post<any>(`${this.baseUrl1}`,user);
  }

  getListAgent():Observable<Agent[]>{
    return this.https.get<Agent[]>(`${this.baseUrl}`);
  }

  getListUser():Observable<User[]>{
    return this.https.get<User[]>(`${this.baseUrl}`);
  }

  getUtilisateurById(id:number):Observable<Agent>{
    return this.https.get<Agent>(`${this.baseUrl}/${id}`);
}

updateUtilisateur(id:number , provenace:Agent):Observable<Object>{
  return this.https.put(`${this.baseUrl}/${id}`, provenace);
}

deleteUtilisateur(id:number):Observable<Object>{
  return this.https.delete(`${this.baseUrl}/${id}`);
}
  

}
