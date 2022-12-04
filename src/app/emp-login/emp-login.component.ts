import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {
uname=""
pswrd=""
view=()=>{
  let data:any={
    "uname":this.uname,
    "pswrd":this.pswrd
  }
  console.log(data)
}
}
