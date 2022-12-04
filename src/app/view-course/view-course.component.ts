import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
 constructor(private api:ApiServiceService){
  api.fetchCourse().subscribe(
    (response)=>{
      this.data=response

    }
  )
 }
 data:any=[]
}
