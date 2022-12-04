import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  fetchCourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourse=(dataTosend:any)=>{
    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",dataTosend)
  }
}
