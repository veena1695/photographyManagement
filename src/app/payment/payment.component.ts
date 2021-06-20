import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private serv: AuthService, private router: Router) { }
 
  monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  yearArr= ["2019","2020","2021","2022","2023","2024","2025","2026","2027","2028"]
  month = "month";
  year = "";
  rid;
  ngOnInit() {
    this.getStatus()
  }

  getStatus(){
    this.serv.getStatus().subscribe((data:any)=>{
      console.log(data)
      if(data && data.length>0){
        this.rid = data[0].rid
      }
    })
  }

  pay(){
    this.serv.updateStatus({rid: this.rid},"paid").subscribe((data:any)=>{
      if(data == 'success'){
        alert("Payment Successful");
        this.router.navigateByUrl('**')
        this.router.navigateByUrl('main')
      }else{
        alert("Please try again..something went wrong")
      }
    })
  }

}
