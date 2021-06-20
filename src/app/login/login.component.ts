import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reg = ["As Member", "As User"]
  constructor(private router: Router, private serv: AuthService) { }
  user;pass;
  ngOnInit() {
  }

  goToReg(reg){
    if(reg == 'As Member'){
      this.router.navigateByUrl('register-member')
    }else{
      this.router.navigateByUrl('register-user')
    }
  }

  loginUser(){
    let that = this;
    let flag = false;
    if(this.user!='' && this.pass!=''){
      this.serv.getUserDetails(this.user,this.pass).subscribe((data:any)=>{
        console.log(JSON.stringify(data));
        if( data && data.length> 0 && typeof data[0].uid == 'string'){
          console.log('User');
          sessionStorage.setItem('id',data[0].uid);
          that.router.navigateByUrl('user-dash')
        }else if( data && data.length> 0 && typeof data[0].mid == 'string'){
          console.log('Member')
          sessionStorage.setItem('id',data[0].mid);
          that.router.navigateByUrl('main')
        }else{
          that.router.navigateByUrl('admin-dash')
        }
        
      })
    }else{
      alert("Username and Password cannot be empty...")
    }
    sessionStorage.setItem("logged","true")

    
  }
  
  goToHome(){
    this.router.navigateByUrl("")
  }
}
