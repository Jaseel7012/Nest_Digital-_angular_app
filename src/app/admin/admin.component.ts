import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private route:Router){}
uname=""
pswrd=""
view=()=>{
  let data:any={
    "uname":this.uname,
    "pswrd":this.pswrd
  }
  console.log(data)
  if(this.uname=="admin" && this.pswrd=="nestdigital"){
    this.route.navigate(['/viewc'])
  }else{
    alert("invalid credential")
  }
}
}
