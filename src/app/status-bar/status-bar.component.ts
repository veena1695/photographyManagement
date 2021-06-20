import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor(private serv: AuthService) { }
  status="";
  ngOnInit() {
    this.checkStatus();
  }

  checkStatus(){
    this.serv.getStatus().subscribe((data:any)=>{
      console.log(data)
      if(data && data.length>0){
        this.status = data[0].status
      }
    })
  }

  getClass(num){
    switch(this.status){
      case 'pending' : 
        switch(num){
          case 1 : return ['fa fa-check','done'];
          case 2 : 
          case 3 :
          case 4 :
          case 5 : 
            return 'fa fa-times';
        }
      case 'read' : 
        switch(num){
          case 1 : return ['fa fa-check','done'];
          case 2 : return ['fa fa-check','done'];
          case 3 : return 'fa fa-refresh';
          case 4 :
          case 5 : 
            return 'fa fa-times';
        }
      case 'acknow' : 
        switch(num){
          case 1 : 
          case 2 : 
          case 3 : return ['fa fa-check','done'];
          case 4 : 
          case 5 : 
            return 'fa fa-times';
        }
      case 'accepted' : 
        switch(num){
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : return ['fa fa-check','done']; 
          case 5 : return 'fa fa-times';
        }
      case 'rejected' : 
        switch(num){
          case 1 : 
          case 2 : 
          case 3 : return ['fa fa-check','done'];
          case 4 :  
          case 5 : return 'fa fa-times';
        }
      case 'paid' : 
        switch(num){
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 :  
          case 5 : return ['fa fa-check','done'];
        }
      
    }
  }

}
