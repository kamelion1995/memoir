import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  type=""
  iduser= ""
  isconnected(){
    let user = sessionStorage.getItem("iduser")
    return (user!=null)
  }

  isadmin(){
    if(this.isconnected()){
      if(this.type==="admin")
        return true
      else
        return false
    }else
      return false
  }

  constructor() { }
}
