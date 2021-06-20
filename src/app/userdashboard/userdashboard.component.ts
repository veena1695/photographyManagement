import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
 
  constructor(private router : Router,private serv: AuthService) { }
  id=0;
  name="";
  allArr:any=[]
  mid="";
  dispArr:any= [];
  offset = 0;
  detailFlag=false;
  showFlag = false;
  memReq : any = [];
  headings = ["Photographer Name","Date","Event Details", "Status"]

  ngOnInit() {
    this.checkRoutes();
    if(!sessionStorage.getItem('id')){
      alert("Something is not right.... please login again")
      this.router.navigateByUrl('login')
    }else{
      this.getMembersAndImages();
    }
  }

  togglePopUp(val){
    this.showFlag = val
    if(val == true){
      this.getMemberReq();
    } 
  }

  getMemberReq(){
    this.serv.getMemberRequest().subscribe((data:any)=>{
      if(data && data.length >0 ){
        this.memReq = data; 
      }
    })

  }

  checkRoutes(){
    this.router.events.forEach((event:any) => {
      console.log(event)
      if(event.url == '/user-dash'){
        this.detailFlag = false;
      }else{
        this.detailFlag = true;
      }
      
    })
  }


  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('login')
  }

  getDetails(member){
    this.detailFlag = true;
    this.router.navigateByUrl('user-dash/details');
    this.serv.selectMember(member)
  }

  getMembersAndImages(flag?){
    this.dispArr = []
    this.id = parseInt(sessionStorage.getItem('logged'));
    if(!flag || flag=='next'){
      
      this.serv.getAllMembers(flag == 'next' ?this.offset+8 : this.offset).subscribe(res=>{
        console.log("RES: "+JSON.stringify(res))
        for(let i in res){
          this.dispArr.push({
            mid : res[i].mid,
            photoStyle : res[i].photoStyle,
            name : res[i].name,
            email : res[i].email,
            phone : res[i].phone,
            state : res[i].state,
            city : res[i].city,
            charges: res[i].charges? res[i].charges: 'hidden',
            vidCharges: res[i].vidCharges? res[i].vidCharges :'hidden',
            about: res[i].about? res[i].about :'hidden'
          }); 
          // console.log(this.router.routerState)
        }
        let arr = [];
        this.dispArr.map(res=>{
          arr.push(res.mid)
        })
        this.serv.getImages(0,arr).subscribe((res:any)=>{
          let count= 0;
          for(let i in this.dispArr){
            for(let j in res){
              if(this.dispArr[i].mid == res[j].mid){
                this.dispArr[i].url = res[j].url; count++;
              }
            }
            if(count == res.length){break;}
          }
          this.offset = flag?this.offset +2:this.offset;
          this.allArr = [...this.allArr,...this.dispArr]
        })
      });
    
    }else{
      this.dispArr=[];
      let count =0;
      let num = this.offset -8;
      for(let i in this.allArr){
        if(parseInt(i) >= num-1){
          this.dispArr.push(this.allArr[i]);
          count++;
        }
        if(count == 8)break;
      }
      this.offset -= 8;
    }
  }

}
