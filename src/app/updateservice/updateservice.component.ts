import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { ServicecourrierService } from '../servicecourrier.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-updateservice',
  templateUrl: './updateservice.component.html',
  styleUrls: ['./updateservice.component.css']
})
export class UpdateserviceComponent implements OnInit {

  id!:number;
  service= new Service();
  public modalRef!:BsModalRef; 

  constructor(private serviceser:ServicecourrierService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.serviceser.getServiceById( this.id).subscribe( data =>{
      this.service=data;
    },
    error =>console.log(error) 
    );
  }
  onService(){
    this.serviceser.updateService(this.id, this.service).subscribe(data =>{
      this.goTolistuser();
     },error=>console.log(error));

  }
  goTolistuser(){
    this.router.navigate(['/listservice'])
  }

  }


