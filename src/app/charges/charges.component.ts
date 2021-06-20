import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {
  packageArr = ["Select Your Package","20,000","30,000","40,000","50,000","60,000","70,000","80,000"]
  package = "Select Your Package";
  vpackageArr = ["Select Your Package","20,000","30,000","40,000","50,000","60,000","70,000","80,000"]
  vpackage = "Select Your Package";
  photoStyle
  id=0;
  charges=""
  constructor(private serv:AuthService) { }

  ngOnInit() {
    if(sessionStorage.getItem('id')){
      this.fetchMem()
    }
  }

  submit(){
    if(this.package!= "Select Your Package" ){
      this.serv.updateMember(this.package,this.vpackage,sessionStorage.getItem('id')).subscribe((data)=>{
        if(data == 'success'){
          alert('Details updated...')
        }else{
          alert("Something went wrong...")
        }
      })
    }
  }

  fetchMem(){
    this.id = parseInt(sessionStorage.getItem('id'));
    this.serv.fetchMembers(this.id).subscribe((data)=>{
        this.photoStyle = data[0].photoStyle;
    })
  }

}
