import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanaltrService } from '../canaltr.service';
import { Canaltransmission } from '../canaltransmission';

@Component({
  selector: 'app-detailcanal',
  templateUrl: './detailcanal.component.html',
  styleUrls: ['./detailcanal.component.css']
})
export class DetailcanalComponent implements OnInit {
  id!:number;
  canals =new Canaltransmission();

  constructor(private service:CanaltrService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.service.getCanalById(this.id).subscribe(data =>{
      this.canals=data;
    })
    

    }
}
