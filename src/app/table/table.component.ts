import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private serv: AuthService) { }
  menuArr = ["Name","Phone","Email","Date","Details","Operation",'Status'];
  requestArr = [];
  msg =""
  ngOnInit() {
    this.getRequests();
  }

  getRequests(){
    this.serv.getUserRequest().subscribe((data:any)=>{
      if(data && data.length>0){
        this.requestArr = data;
      }else{
        this.msg = "You have no Requests yet...."
      }
    })
  }

  accept(obj){
    this.update(obj, 'accepted')
  }

  reject(obj){
    this.update(obj, 'rejected')
  }

  update(obj,action){
    this.serv.updateStatus(obj,action).subscribe((data)=>{
      if(data == 'success'){
        this.getRequests();
      }else{
        console.log('Something went wrong')
      }
    })
  }
}
