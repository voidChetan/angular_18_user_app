import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  userService = inject(UserService);
  router =  inject(Router)
  userList: any[]=[];

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res:any)=>{
      this.userList = res.data;
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to Delete");
    if(isDelete) {
      this.userService.deletUserById(id).subscribe((res:any)=>{
        if(res.result) {
          this.loadUsers()
        } else {
          alert(res.message)
        }
      })
    }
  }
  onEdit(id: number) {
    this.router.navigate(['/editUser',id])
  }

}
