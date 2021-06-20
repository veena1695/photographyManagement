import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  mem  = new BehaviorSubject("");
  memSub = this.mem.asObservable()

  getUserDetails(username,password){
    // Posting details to API server
    return this.http.post('/api/login.php',{
      username,
      password
    })
  }

  selectMember(obj){
    this.mem.next(obj)
  }

  updateMember(charges,vcharges,mid){
    return this.http.post('/api/updateMember.php',{charges,vcharges,mid})
  }

  getLastId(type){
    return this.http.post('/api/getLastId.php',{type: type})
  }

  insertData(username,password,type, id){
    console.log("id: ",id)
    let mid = type == 'member'? id : 0;
    let uid = type == 'user'? id : 0; 
    console.log("mid: ",mid, "  uid: ",uid)
    return this.http.post('/api/register.php',{
      username,
      password,
      uid,
      mid
    })
  }

  fetchRequests(){
    return this.http.post('/api/fetchRequests.php',{flag:'admin-side', type: 'member',id:'mid'});
  }

  getStatus(){
    return this.http.post('/api/fetchRequests.php',{flag:'member-side',type: 'member',id:'mid'});
  }

  getUserRequest(){
    return this.http.post('/api/fetchRequests.php',{flag:'member-side',type: 'user',id:'mid'});
  }

  getMemberRequest(){
    return this.http.post('/api/fetchRequests.php',{flag:'user-side',type: 'user',id:'uid'});
  }

  newRequest(obj,id){
    return this.http.post('/api/newRequest.php',{
      name : obj.name,
      email : obj.email,
      phone : obj.phone,
      mid : id,
      type : 'member',
      status : 'pending'
    })
  }

  sendReq(name,phone,email,date,details,mid){
    return this.http.post('/api/newRequest.php',{
      name,
      email,
      phone,
      mid,
      date,
      details,
      type : 'user',
      status : 'pending'
    })
  }

  updateStatus(obj,action){
    return this.http.post('/api/updateStatus.php',{
      rid: obj.rid,
      status : action
    })
  }

  fetchAllUsers(offset?){
    return this.http.post('/api/fetchUser.php',{offset: offset?offset:0,id:0})
  }

  getAllMembers(offset?){
    return this.http.post('/api/fetchMember.php',{offset: offset?offset:0,id:0,flag :'user-dash'})
  }

  getMyusers(offset?){
    return this.http.post('/api/myusers.php',{offset: offset?offset:0,id:0})

   }

  getMembersAdmin(offset?){
    return this.http.post('/api/fetchMember.php',{offset: offset?offset:0,id:0,flag :'all_mem'})
  }

  getImages(id?,ids?){
    return this.http.post('/api/fetchImages.php',{id : id?id:0,ids: ids?ids:0})
  }

  fetchMembers(id){
    return this.http.post('/api/fetchMember.php',{
      id,offset:0,flag : 'member'
    })
  }

  addImages(id,url){
    console.log("id:",id)
    return this.http.post('/api/addImage.php',{
      id,url
    })
  }
  
  addMemberDetails(obj){
    return this.http.post('/api/member.php',{
      about : obj.about,
      photoStyle : obj.photoStyle,
      city : obj.city,
      state : obj.state,
      address : obj.address,
      name : obj.name,
      email : obj.email,
      phone : obj.phone,
      type : obj.type,
      id : obj.id
    })
  }

  addUserDetails(obj){
    return this.http.post('/api/user.php',{
      name : obj.name,
      email : obj.email,
      phone : obj.phone
    })
  }
}
