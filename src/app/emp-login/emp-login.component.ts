import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {
  constructor(private r:Router){}
uname=""
pswrd=""
view=()=>{
  let data:any={
    "uname":this.uname,
    "pswrd":this.pswrd
  }
  console.log(data)
  if(this.uname=="user" && this.pswrd=="1122"){
    this.r.navigate(['/add course'])
  }
  else{
    alert("invalid credential")
  }
}
}
