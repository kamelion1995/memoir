import { Component, OnInit } from '@angular/core';
import { Canaltransmission } from '../canaltransmission';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CanaltrService } from '../canaltr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecanal',
  templateUrl: './updatecanal.component.html',
  styleUrls: ['./updatecanal.component.css']
})
export class UpdatecanalComponent implements OnInit {

  id!:number;
  canals= new Canaltransmission();
  public modalRef!:BsModalRef; 


  constructor(private canaltr:CanaltrService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.canaltr.getCanalById( this.id).subscribe (data =>{
      this.canals=data;
    },
        error=>console.log(error) 
    );

  }
 onTransmission(){

  this.canaltr.updatecanal(this.id, this.canals).subscribe(data =>{
    this.goTolistuser();
   },error =>console.log(error)
   );

}
goTolistuser(){
  this.router.navigate(['/listcanal']);
}

}
