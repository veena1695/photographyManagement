import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  selectedFile:any = [];
  ref;task;
  imgCount =[1]
  allImages =[]
  ngOnInit(){
    this.getProfileImageUrl();
  }
  constructor(private http : HttpClient, private afMod : AngularFireStorage, private serv : AuthService){}

  addFile(){
    this.imgCount.push(1)
  }

  removeFile(){
    this.imgCount.pop()
  }

  onFileSelected(event){
    this.selectedFile.push(event.target.files[0]); 
  }

  getProfileImageUrl() {
    let id = sessionStorage.getItem('id');
    this.serv.getImages(id).subscribe(res=>{
      for(let i in res){
        this.allImages.push(res[i].url);
      }
    })

  }

  

  onUpload(event){
    let id = sessionStorage.getItem('id');
    let count = 0;
    if(id){
      for(let i of this.selectedFile){
        const randomId = Math.random().toString(36).substring(2);
        let ref :firebase.storage.Reference = firebase.storage().ref("/app/"+randomId);
        let putVar = ref.put(i,{contentType : i.type} );
  
        putVar.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
          uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
            this.allImages.push(downloadURL);
            console.log(id)
            this.serv.addImages(id, downloadURL).subscribe(res =>{
              if(res == 'success'){
                count ++;
              }
            })
          });
        });
      }
      let that =this;
      setTimeout(()=>{
        if(count == that.selectedFile.length){
          alert('Successfully uploaded '+count+" images...")
        }else{
          alert("Failure Please check your internet ->  successCount : "+count+" Failed Count: "+(that.selectedFile.length-count))
  
        }
        this.selectedFile = [];
        this.imgCount = [];
        this.imgCount = [1];
      },9000)
    }
  }

}
