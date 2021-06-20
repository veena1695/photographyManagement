import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myIndex = 0;
  flag = 0
  menu = ["Family", "Wedding","Pre-wedding","Baby-shower","Engagement","Food","Outdoor" ]
  reg = ["As Member", "As User"]
  constructor(private router : Router) { }

  imgArr= ["../../assets/1.jpg", "../../assets/2.jpg","../../assets/3.jpg","../../assets/4.jpg","../../assets/5.jpg"]

  ngOnInit() {
    let that = this;
    this.flag = 0
    this.carousel()
  }

  

  carousel() {
    if(this.flag == 5){
      this.flag= 1
    }else{
      this.flag = this.flag+ 1;
    }
    let that = this;
    setTimeout( ()=>{
      that.carousel()
    }, 2000);

    
    // var i;
    // var x = document.getElementsByClassName("mySlides");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";  
    // }
    // this.myIndex++;
    // if (this.myIndex > x.length) {this.myIndex = 1}    
    // x[this.myIndex-1].style.display = "block";  
    //  Change image every 3 seconds
  }

  goToReg(reg){
    if(reg == 'As Member'){
      this.router.navigateByUrl('register-member')
    }else{
      this.router.navigateByUrl('register-user')
    }
  }

  goToLogin(){
    this.router.navigateByUrl("login")
  }

}
