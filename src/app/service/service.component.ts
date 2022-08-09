import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServicecourrierService } from '../servicecourrier.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service = new Service();
  public modalRef!:BsModalRef; 

 
constructor(private ser:ServicecourrierService,private router:Router) { }

  ngOnInit(): void {
  }

  Service(){
  
    this.ser.ajoutService(this.service).subscribe(data=>{
      this.service=data
      this.router.navigate(['/acueil']);
      
      
    },
          error =>console.log(error));
  
  }

}
