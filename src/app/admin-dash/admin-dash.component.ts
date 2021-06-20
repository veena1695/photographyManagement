import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  

  constructor( private router : Router) { }

  ngOnInit() {
  }
  request(){
    this.router.navigateByUrl('admin-dash/request')
  }

  allmem(){
    this.router.navigateByUrl('admin-dash/allmem')
  }
  alluser(){
    this.router.navigateByUrl('admin-dash/alluser')
  }

}


