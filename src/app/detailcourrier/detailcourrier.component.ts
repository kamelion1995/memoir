import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courrier } from '../courrier';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-detailcourrier',
  templateUrl: './detailcourrier.component.html',
  styleUrls: ['./detailcourrier.component.css']
})
export class DetailcourrierComponent implements OnInit {

  id!:number;
  courrier =new Courrier();

  constructor(private courierser:CourrierService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.courierser.getCourrierById(this.id).subscribe(data =>{
      this.courrier=data;
    })
  }

}
