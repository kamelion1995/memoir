import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';


@Component({
  selector: 'app-acueil',
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.css']
})
export class AcueilComponent implements OnInit {
  agent= new Agent;

  constructor() { }

  ngOnInit(): void {
  }

}
