import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { database } from 'firebase';

@Component({
  selector: 'app-member-request',
  templateUrl: './member-request.component.html',
  styleUrls: ['./member-request.component.css']
})
export class MemberRequestComponent implements OnInit {
  headings= ["Name","Phone","Email","Status","Actions"]
  constructor(private serv: AuthService) { }
  allReq = []
  ngOnInit() {
    this.generateHeadings();
    this.fetchRequests();
  }

  generateHeadings(){

  }

  fetchRequests(flag?){
    this.serv.fetchRequests().subscribe((data:any)=>{
      if(data && database.length>0 && flag){
        this.allReq = data
      }
      else if(data && database.length>0 && !flag){
        this.allReq = [...this.allReq, ...data]
      }
      console.log(JSON.stringify(this.allReq))
    })
  }

  acknowledge(obj){
    this.update(obj,'acknow')
  }

  accept(obj){
    this.update(obj,'accepted')
  }

  reject(obj){
    this.update(obj,'rejected')
  }

  update(obj,action){
    this.serv.updateStatus(obj,action).subscribe((data:any)=>{
      if(data == 'success'){
        this.fetchRequests(true)
      }else{
        alert("Please try again..something went wrong")
      }
    })
  }

}
