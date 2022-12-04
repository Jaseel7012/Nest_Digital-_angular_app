import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
name=""
fname=""
nick=""
view=()=>{
  let data:any={
    "name":this.name,
    "fname":this.fname,
    "nick":this.nick
  }
  console.log(data)
}
}
