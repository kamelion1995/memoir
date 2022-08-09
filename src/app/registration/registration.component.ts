import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';
import { Profile } from '../profile';
import { RegistrationService } from '../registration.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  agent=new Agent();
  profiles:Profile[] =[];
  selectedProfile:any;
  agents: Agent[] = [];
  public modalRef!:BsModalRef ;


  message!:string;

  constructor(private registration:RegistrationService, private router:Router) { }

  ngOnInit(): void {

    this.listProfile();
    this.listeUtilisateur();
  }
  listeUtilisateur(){

    this.registration.getListAgent().subscribe(
      data =>{
        this.agents=data;
       
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

  listProfile(){
    this.registration.getListProfile().subscribe(
      data =>{
        this.profiles=data;
      }
    );
}

  registerAdminAgent(){
  
    this.registration.Registeragent(this.agent).subscribe(data=>{
      this.agent=data
      this.router.navigate(['/acueil']);
      
      
    },
    erro =>console.log(erro));
    this.message="utilisateur Enregistre avec succe";
  }


  
 
}
