import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
name=""
desi=""
comp=""
pn=""
email=""
country=""
query=""
view=()=>{
  let data:any={
    "name":this.name,
    "desi":this.desi,
    "comp":this.comp,
    "pn":this.pn,
    "email":this.email,
    "country":this.country,
    "query":this.query
  }
  console.log(data)
}

}
