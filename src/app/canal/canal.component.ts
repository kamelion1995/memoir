import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CanaltrService } from '../canaltr.service';
import { Canaltransmission } from '../canaltransmission';
import { Courrier } from '../courrier';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  public modalRef!:BsModalRef;
  canals:Canaltransmission=new Canaltransmission();
  courrier!:Courrier;
  
   constructor(private transmi:CanaltrService, private router:Router) { }

     ngOnInit(): void {
        if(localStorage.getItem("courrier")){
          let data = localStorage.getItem("courrier");
          if(data){
            this.courrier = JSON.parse(data)
          }
         
        }
      }

    transmission(){
      this.canals.courrier = this.courrier
     this.transmi.regicanal(this.canals).subscribe(data =>{
      this.canals=data;
      this.router.navigate(['/listcanal']);
     }
     
    
     )}

     
   
  }


