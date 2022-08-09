import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courrier } from '../courrier';
import { CourrierService } from '../courrier.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {

  courrier=new Courrier();
  public modalRef!:BsModalRef; 

  constructor(private courierser:CourrierService,private router:Router) { }

  ngOnInit(): void {
  }

  Courrier(){
    this.courierser.Regicourier(this.courrier).subscribe(data=>{
      this.courrier=data;
      this.router.navigate(['/acueil']);
    })

  }

}
