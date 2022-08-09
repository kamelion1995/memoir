import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Correspondant } from '../correspondant';
import { CorrespondantService } from '../correspondant.service';

@Component({
  selector: 'app-correspondant',
  templateUrl: './correspondant.component.html',
  styleUrls: ['./correspondant.component.css']
})
export class CorrespondantComponent implements OnInit {

  correspondant=new Correspondant()


  constructor(private corres:CorrespondantService, private router:Router) { }

  ngOnInit(): void {
  }
  registerCorrespondant(){
    this.corres.RegisterUserFromRemote(this.correspondant).subscribe(
      data=>{
      console.log("response receved");
      this.router.navigate(['/']);
       } ,
      error=> console.log("exception")
      
    );

  }
  

}
