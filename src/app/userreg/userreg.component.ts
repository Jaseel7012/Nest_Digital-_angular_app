import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
id=""
fname=""
lname=""
hno=""
house=""
strt=""
pin=""
dist=""
stat=""
country=""
mob=""
email=""
pname=""
gender=""
highdegree=""
yoe=""
doj=""
pswrd=""
uname=""
cnfrm=""
view=()=>{
  let data:any={
    "id":this.id,
    "fname":this.fname,
    "lname":this.lname,
    "hno":this.hno,
    "house":this.house,
    "stat":this.stat,
    "country":this.country,
    "mob":this.mob,
    "email":this.email,
    "pname":this.pname,
    "gender":this.gender,
    "highdegree":this.highdegree,
    "yoe":this.yoe,
    "doj":this.doj,
    "pswrd":this.pswrd,
    "uname":this.uname,
    "cnfrm":this.cnfrm
  }
  console.log(data)
}

}
