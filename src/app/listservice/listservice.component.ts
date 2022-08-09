import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServicecourrierService } from '../servicecourrier.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegistrationComponent } from '../registration/registration.component';
import { ServiceComponent } from '../service/service.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent implements OnInit {


  modalRef!:BsModalRef;
  service: Service []=[];
  p:number=1;
  nomService!:any;

  constructor(private servicecourrier:ServicecourrierService, private modalService: BsModalService, private router:Router) { }

  ngOnInit(): void {
    this.listService()

  }

  listService(){
    this.servicecourrier.getListServiceCourrier().subscribe(
      data =>{
        this.service=data;
      }
    );
}
deleteService(id:number){
  this.servicecourrier.deleteService(id).subscribe(data =>{
      console.log(data);
      this.listService();
    })
}

openModal(){
  this.modalRef = this.modalService.show(RegistrationComponent);

}
openService(){
  this.modalRef = this.modalService.show(ServiceComponent);


}
updateService(id:number){
  this.router.navigate(['updateservice', id]);

}

Search(){
  this.service= this.service.filter(res=>{
    return res.nomService.toLocaleLowerCase().match(this.nomService.toLocaleLowerCase());
      });

  
}



}
