import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-mem',
  templateUrl: './all-mem.component.html',
  styleUrls: ['./all-mem.component.css']
})
export class AllMemComponent implements OnInit {

  constructor(private serv : AuthService) { }
  headings = ["Name","Phone","Email","PhotoStyle","Address","City","State"]
  allMem = [];
  offset = 0;
  ngOnInit() {
    this.getAllMembers(this.offset);
  }

  getAllMembers(offset){
    this.serv.getMembersAdmin(offset).subscribe((data:any)=>{
      if(data && data.length> 0){
        this.allMem = [...this.allMem, ...data]
      }
      console.log(JSON.stringify(this.allMem))
    })
  }

  next(){

  }
}
