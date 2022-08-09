import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../agent';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.css']
})
export class UpdateutilisateurComponent implements OnInit {
  id!:number;
  agent:Agent=new Agent();

  constructor(private registerservice:RegistrationService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.registerservice.getUtilisateurById( this.id).subscribe (data=>{
      this.agent=data;
    },
      error =>console.log(error) 
    );
  }

  onSubmit(){
    this.registerservice.updateUtilisateur(this.id, this.agent).subscribe(data=>{
      this.goTolistuser();
     },error=>console.log(error));

  }
  goTolistuser(){
    this.router.navigate(['/listuser'])
  }

}
