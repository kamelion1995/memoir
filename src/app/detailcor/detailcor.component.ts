import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Correspondant } from '../correspondant';
import { CorrespondantService } from '../correspondant.service';

@Component({
  selector: 'app-detailcor',
  templateUrl: './detailcor.component.html',
  styleUrls: ['./detailcor.component.css']
})
export class DetailcorComponent implements OnInit {
  id!: number;

  correspondant =new Correspondant();

  constructor(private correspon:CorrespondantService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.correspon.getCorrespondantById(this.id).subscribe(data =>{
      this.correspondant=data;
    })
    

    }
  }


