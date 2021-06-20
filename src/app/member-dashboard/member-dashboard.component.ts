import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.css']
})
export class MemberDashboardComponent implements OnInit {
  
  constructor(private router : Router,private serv: AuthService) { }
  status = ''
  ngOnInit() {
    if(!sessionStorage.getItem('logged')){
      alert("Something is not right.... please login again")
      this.router.navigateByUrl('login')
    }else{
      this.getStatus();
      // this.router.navigateByUrl('main/profile')
    }
  }

  getStatus(){
    this.serv.getStatus().subscribe((data:any)=>{
      console.log(data)
      if(data && data.length>0){
        this.status = data[0].status
        if(this.status == 'paid'){
          this.router.navigateByUrl('main/profile')
        }else{
          this.router.navigateByUrl('main/status')
        }
      }
    })
  }

  edit(){
    this.router.navigateByUrl('main/edit-profile')
  }

  images(){
    this.router.navigateByUrl('main/images')
  }

  charges(){
    this.router.navigateByUrl('main/charges')
  }

  profile(){
    this.router.navigateByUrl('main/profile')
  }
  table(){
    this.router.navigateByUrl('main/table')
  }

  cal(){
    this.router.navigateByUrl('main/cal')
  }

  requestStatus(){
    this.router.navigateByUrl('main/status')
  }
  myusers(){
    this.router.navigateByUrl('main/myusers')
  }

  payment(){
    this.router.navigateByUrl('main/payment')
  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('login')
  }
}
