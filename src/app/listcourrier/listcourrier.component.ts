import { Component, OnInit } from '@angular/core';
import { Courrier } from '../courrier';
import { CourrierService } from '../courrier.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CanalComponent } from '../canal/canal.component';
import { CourrierComponent } from '../courrier/courrier.component';
import { Router } from '@angular/router';
import { CanaltrService } from '../canaltr.service';

@Component({
  selector: 'app-listcourrier',
  templateUrl: './listcourrier.component.html',
  styleUrls: ['./listcourrier.component.css']
})
export class ListcourrierComponent implements OnInit {

  modalRef!:BsModalRef;
  courrier: Courrier []=[];
  objet!:any;
  p:number=1;


  constructor( private courrierService:CourrierService, private modalService: BsModalService, private router:Router) { }

  ngOnInit(): void {

  this.listCourrier()
}

  listCourrier(){
    this.courrierService.getListCourrier().subscribe(
      data =>{
        this.courrier=data;
      }
    );
}
openModal(){

  this.modalRef = this.modalService.show(CanalComponent);


}

AjoutCourrier(){
  this.modalRef = this.modalService.show(CourrierComponent);
}

deletecourrier(id:number){
  this.courrierService.deletecourrier(id).subscribe(data =>{
    console.log(data);
    this.listCourrier();

});
}
updatecourrier(id:number){
  this.router.navigate(['updatecourrier',id]);
}

detailUtilisateur(id:number){
  this.router.navigate(['detailcourrier', id]);

}
Search(){
  this.courrier= this.courrier.filter(res=>{
    return res.objet.toLocaleLowerCase().match(this.objet.toLocaleLowerCase());
      });

  
}


}
