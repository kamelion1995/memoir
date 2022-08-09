import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanaltrService } from '../canaltr.service';
import { Canaltransmission } from '../canaltransmission';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AjouparticipanComponent } from '../ajouparticipan/ajouparticipan.component';

@Component({
  selector: 'app-listcanal',
  templateUrl: './listcanal.component.html',
  styleUrls: ['./listcanal.component.css']
})
export class ListcanalComponent implements OnInit {

  canal: Canaltransmission[]=[];
  reference!:any;
  p:number = 1;
  modalRef!:BsModalRef;

  constructor(private service:CanaltrService, private modalService: BsModalService, private router:Router) { }

  ngOnInit(): void {

    this.listeCanal();

  }

  listeCanal(){

    this.service.getListCanal().subscribe (data=>{
        this.canal=data;
       
      }
    );
  }
  deletecanal(id:number){
    this.service.deleteCanal(id).subscribe(data =>{
      console.log(data);
      this.listeCanal();
  
  });

  }
  updatecanal(id:number){
      this.router.navigate(['updatecanal', id]);
  }

  detailcanal(id:number){
    this.router.navigate(['detailcanal', id]);

  }
  Search(){
    this.canal= this.canal.filter(res=>{
      return res.reference.toLocaleLowerCase().match(this.reference.toLocaleLowerCase());
        });
  
    
  }

  openModal(){
    this.modalRef = this.modalService.show(AjouparticipanComponent);
  }
  
  
 

  
}
