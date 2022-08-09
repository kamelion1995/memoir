import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Agent } from '../agent';
import { Profile } from '../profile';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-ajouparticipan',
  templateUrl: './ajouparticipan.component.html',
  styleUrls: ['./ajouparticipan.component.css']
})
export class AjouparticipanComponent implements OnInit {

  profiles:Profile[] =[];
  selectedProfile:any;
  agents: Agent[] = [];
  agent =new Agent();

  public modalRef!:BsModalRef ;

  constructor(private registration:RegistrationService, private router:Router) { }

  ngOnInit(): void {

    this.listProfile();
    this.listAgent();
  }

  listProfile(){
     this.registration.getListProfile().subscribe(
       data =>{
       this.profiles=data;
       }
     ) 
  }
  listAgent(){
    this.registration.getListAgent().subscribe(data=>{
      this.agents=data;
    })
  }
  registerAdminAgent(){
    this.registration.Registeragent(this.agent).subscribe(data=>{
      this.agent=data;
      this.router.navigate(['/acueil']);
    })
  }


}
