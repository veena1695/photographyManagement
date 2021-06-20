import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.css']
})

export class DetailMemberComponent implements OnInit {
  allImages:any=[];
  profileImg = ""
  name;phone;email;date;details;
  constructor(private router: Router, private serv: AuthService) { }
  // name="Birlens Technology"
  memberObj:any = {name:'rohan', state: 'Maharashtra', city : 'Pune'};
  ngOnInit() {
    this.serv.memSub.subscribe((data:any)=>{
      this.memberObj.mid = data.mid?data.mid : '1';
      this.memberObj.name = data.name?data.name : 'rohan';
      this.memberObj.state = data.state?data.state : 'Maharashtra';
      this.memberObj.city = data.city?data.city : 'Pune';
      this.memberObj.phone = data.phone?data.phone : '0000000';
      this.memberObj.charges = data.charges?data.charges : 'hidden';
      this.memberObj.vidCharges = data.vidCharges?data.vidCharges : 'hidden';
      this.memberObj.about = data.about?data.about : '10,000';
      this.getProfileImageUrl();
    })
  }


  getProfileImageUrl() {
    this.serv.getImages(this.memberObj.mid?this.memberObj.mid: 0).subscribe(res=>{
      for(let i in res){
        this.allImages.push(res[i].url);
      }
      this.profileImg = this.allImages[0];
      this.allImages.shift()
      // let row=[];let allArr=[];
      // for(let i in this.allImages){
      //   row.push(this.allImages[i]);
      //   if(row.length == 3 || parseInt(i) == this.allImages.length-1){
      //     allArr.push(row)
      //     row = [];
      //   }
      // }
      // this.allImages = allArr;
      // console.log(JSON.stringify(this.allImages))
    })

  }

  goBack(){
    this.router.navigateByUrl('user-dash')
  }

  sendReq(){
    console.log(this.name," | ", this.phone," | ", this.email," | ", this.date," | ", this.details);
    this.serv.sendReq(this.name,this.phone, this.email, this.date, this.details,this.memberObj.mid).subscribe((data:any)=>{
      if(data == 'success'){
        alert("Request Sent")
      }
    })
    this.name= this.phone= this.email= this.date= this.details =""
  }

}
