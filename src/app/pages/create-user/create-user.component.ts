import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  userObj: any = {
    "userId": 0,
    "fulName": "",
    "emailId": "",
    "mobileNo": "",
    "addressLine1": "",
    "addressLine2": "",
    "city": "",
    "profilePicUrl": "",
    "password": "",
    "role": "User"
  }
  loggedUserId: number = 0;
  userService = inject(UserService)
  actiavteRoute = inject(ActivatedRoute);
  currentId: number = 0;

  constructor() {
    debugger;
    const loggedUser = localStorage.getItem('userApp');
    if(loggedUser) {
      const parseData =  JSON.parse(loggedUser);
      if(parseData.role == 'User') {
        this.loggedUserId = parseData.userId;
        this.getUserById(this.loggedUserId)
      } 
    }
    this.actiavteRoute.params.subscribe((res:any)=>{
      debugger;
      this.currentId = res.id;
      this.getUserById(this.currentId)
    })
  }

  getUserById(id:number) {
    this.userService.GetUserById(id).subscribe((reS:any)=>{
        this.userObj = reS.data;
    })
  }

  onSave() {
    this.userService.createNewUser(this.userObj).subscribe((res:any)=>{
      if(res.result) {
        alert("User Created Success")
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    this.userService.updateUser(this.userObj).subscribe((res:any)=>{
      if(res.result) {
        alert("User Update Success")
      } else {
        alert(res.message)
      }
    })
  }
}
