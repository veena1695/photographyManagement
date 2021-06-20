import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private serv : AuthService) { }
  headings = ["Name","Phone","Email"]
  allUsers = [];
  offset = 0;

  ngOnInit() {
    this.fetchAllUsers(this.offset);
  }

  fetchAllUsers(offset){
    this.serv.fetchAllUsers(offset).subscribe((data:any)=>{
      if(data && data.length> 0){
        this.allUsers = [...this.allUsers, ...data]
      }
      console.log(JSON.stringify(this.allUsers))
    })
  }

}
