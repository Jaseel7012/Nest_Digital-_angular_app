import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-courseadd',
  templateUrl: './courseadd.component.html',
  styleUrls: ['./courseadd.component.css']
})
export class CourseaddComponent {
  title=""
  cdate=""
  
  duration=""
  venue=""
   constructor(private api:ApiServiceService){}
  viewdata=()=>{
    let data:any={
      "title":this.title,
      "cdate":this.cdate,
      
      "duration":this.duration,
      "venue":this.venue
    }
    console.log(data)
     this.api.addCourse(data).subscribe(

     (response:any)=>{
      console.log(response)
       if(response.status!="success"){
        alert("successfully added")
      }
       else{
        alert("something went wrong")
      }


    }
        
      
     )
  }
}
