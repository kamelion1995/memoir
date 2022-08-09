import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Correspondant } from '../correspondant';
import { CorrespondantService } from '../correspondant.service';

@Component({
  selector: 'app-updatecores',
  templateUrl: './updatecores.component.html',
  styleUrls: ['./updatecores.component.css']
})
export class UpdatecoresComponent implements OnInit {

  id!: number;
  correspondant: Correspondant=new Correspondant();

  constructor( private correspondan:CorrespondantService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.correspondan.getCorrespondantById( this.id).subscribe(data=>{
      this.correspondant=data;
    },
         error=>console.log(error) 
    );

  }


  onSubmit(){
    this.correspondan.updateCorrespondant(this.id, this.correspondant).subscribe(data =>{
      this.goTolistuser();
     },error =>console.log(error));

  }
  goTolistuser(){
    this.router.navigate(['/listcor']);

  }

}
