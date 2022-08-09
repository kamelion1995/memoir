import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';
import { Admin } from '../admin';
import { AuthentificationService } from '../authentification.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email=""
  password=""
  type=""
  agent =new Agent();
  admin= new Admin();

  constructor(private auth:AuthentificationService, private route:Router, private global: GlobalService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("iduser")
  }

  submit(){

    if(this.type=="agent"){
      this.auth.loginAgent(    
      {     
        "emailId": this.email,
        "password": this.password  
        }
      ).subscribe((data: { idagent: string; } | null)=>{
          if(data!=null){
            this.global.iduser=data.idagent
            this.global.type="agent"
            sessionStorage.setItem("iduser", data.idagent)
            this.route.navigate(['/acueil']);
          }else{
            alert("Cet user n'exisste pas")
          }
     
         } ,
        
      )
      
    }else{
      this.auth.loginAdmin(
        {
          "emailId": this.email,
          "password": this.password
        }

      ).subscribe(

        (        data: { idadmin: string; } | null) =>{
          if(data!=null){
            this.global.iduser=data.idadmin
            this.global.type="admin"
            sessionStorage.setItem("iduser", data.idadmin)
            this.route.navigate(['/acueil']);
          }else{

          }
        },
        
      )
      
    }
  }

}
