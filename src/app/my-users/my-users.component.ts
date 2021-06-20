import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-users',
  templateUrl: './my-users.component.html',
  styleUrls: ['./my-users.component.css']
})
export class MyUsersComponent implements OnInit {

  constructor(private serv : AuthService) { }
  headings = ["Name","Phone","Email"]
  myusers = [];
  offset = 0;
  ngOnInit() {
    this.getMyusers(this.offset);
  }
  getMyusers(offset){
    this.serv.getMyusers(offset).subscribe((data:any)=>{
      if(data && data.length> 0){
        this.myusers = [...this.myusers, ...data]
      }
      console.log(JSON.stringify(this.myusers))
    })
  }

}
