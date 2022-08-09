import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courrier } from '../courrier';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-updatecourrier',
  templateUrl: './updatecourrier.component.html',
  styleUrls: ['./updatecourrier.component.css']
})
export class UpdatecourrierComponent implements OnInit {

  id!:number;
  courrier= new Courrier();

  constructor(private courrierre:CourrierService, private route:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.active.snapshot.params['id']
    this.courrierre.getCourrierById( this.id).subscribe( data =>{
      this.courrier=data;
    },
    error =>console.log(error) 
    );
  }

  onCourrier(){
    this.courrierre.updateCourrier(this.id, this.courrier).subscribe(data =>{
      this.goTolistuser();
     },error=>console.log(error));

  }
  goTolistuser(){
    this.route.navigate(['/listcourrier'])
  }

}
