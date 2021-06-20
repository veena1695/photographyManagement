import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private serv:AuthService) { }
  photoStyleArr = ["Select Your photography Style","Family Photography","Wedding Photography","Pre-wedding Photography","Baby-Shower","Engagement","Food Photography","Outdoor Photography"]
  stateArr = ["Select Your State","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Jharkhand","Himachal Pradesh","Jammu and Kashmir","Tamil Nadu","Karnataka","Kerala","Maharashtra","Punjab","Rajasthan"]
  cityArr = ["Select Your City","Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Surat","Pune","Jaipur","Lucknow","Kanpur","Nagpur","Indore","Thane","Bhopal","Pimpri-Chinchwad","Vadodara","Agra","Nashik","Navi Mumbai","Kolhapur","Mangalore"]

  photoStyle = "Select Your photography Style";
  city="Select Your City";
  name = ""; address = ""; phone =""; email="";
  state = "Select Your State"
  about = "";
  password="";
  id =0;

  ngOnInit() {
    if(sessionStorage.getItem('logged')){
      this.fetchMem();
    }
  }

  fetchMem(){
    this.id = parseInt(sessionStorage.getItem('id'));
    this.serv.fetchMembers(this.id).subscribe((data)=>{
        this.name = data[0].name;
        this.address = data[0].address;
        this.email = data[0].email;
        this.phone = data[0].phone;
        this.city = data[0].city;
        this.state = data[0].state;
        this.about = data[0].about;
        this.photoStyle = data[0].photoStyle;

    })
}

}
