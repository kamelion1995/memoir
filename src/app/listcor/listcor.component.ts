import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Correspondant } from '../correspondant';
import { CorrespondantService } from '../correspondant.service';

@Component({
  selector: 'app-listcor',
  templateUrl: './listcor.component.html',
  styleUrls: ['./listcor.component.css']
})
export class ListcorComponent implements OnInit {
  correspondant:  Correspondant[] =[];

  constructor(private cores:CorrespondantService, private router:Router) { }

  ngOnInit(): void {
    this.listProve();

  }
  listProve(){
    this.cores.getListCorrespondance().subscribe(
      data=>{
        this.correspondant=data;
      }
    );
}

updatecorespondant(id:number){
  this.router.navigate(['updatecores', id]);

}

deleteCorrespondant(id:number){

  this.cores.deleteCorrespondant(id).subscribe(data=>{
    console.log(data);
    this.listProve();
  })



}
detailCorrespondant(id:number){
  this.router.navigate(['detailcor', id])

}


}
