import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
   
  agent: Agent[] = [];
  nom!:any;
  p:number=1;
  


  constructor(private registration:RegistrationService, private router:Router) { }

  ngOnInit(): void {
    this.listeUtilisateur();
  }

  listeUtilisateur(){

    this.registration.getListAgent().subscribe(
      data =>{
        this.agent=data;
       
      }
    );
  }
  updateUtilisateur(id:number){
    this.router.navigate(['updateutilisateur', id]);

  }
  deleteUtilisateur(id:number){
    this.registration.deleteUtilisateur(id).subscribe(data =>{
      console.log(data);
      this.listeUtilisateur();
    })

  }
  detailUtilisateur(id:number){
    this.router.navigate(['detailutilisateur', id]);
  }

  Search(){
    this.agent= this.agent.filter(res=>{
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
        });
  
    
  }

  

  


}
