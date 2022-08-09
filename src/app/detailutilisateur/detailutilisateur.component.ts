import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../agent';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-detailutilisateur',
  templateUrl: './detailutilisateur.component.html',
  styleUrls: ['./detailutilisateur.component.css']
})
export class DetailutilisateurComponent implements OnInit {
  id!:number;
  agent =new Agent();

  constructor(private registration:RegistrationService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.registration.getUtilisateurById(this.id).subscribe(data =>{
      this.agent=data;
    })
    

    }

  }


