import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  reg = ["As Member", "As User"]
  constructor( private serv: AuthService, private router : Router, private formBuilder : FormBuilder ) { }
  obj = {
    name: "",
    email: "",
    phone : ""
  };
  passValid = true;
  registerForm: FormGroup;
  pass;
  rpass;
  submitted = false;
  id = 0;

  
  ngOnInit() {
    this.getId();
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required,Validators.pattern('[0-9]{10}') ,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required , Validators.minLength(6)]],
      rpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  checkPassVal(){
    return this.pass == this.rpass ? true :  false
  }
  
  get name() { return this.registerForm.get('fullName'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get rpassword() { return this.registerForm.get('rpassword'); }
  getId(){
    this.serv.getLastId('user').subscribe((data:any)=>{
      this.id = parseInt(data[0].id);
    })
  }

  resetObj(){
    this.obj = {
      name: "",
      email: "",
      phone : ""
    };
    this.pass = this.rpass = ""
  }

  addUser(){
    this.submitted= true;
    console.log(JSON.stringify(this.phone.errors))
    if(!this.registerForm.invalid){
      if(this.pass == this.rpass){
        this.passValid =true;
        let that = this;let flag = 0;
        this.serv.addUserDetails(this.obj).subscribe((data)=>{
          if(data == 'success'){
            flag ++;
          }else{
            alert("Sorry, something went wrong in add user...");
          }
        });
        this.serv.insertData(this.obj.email, this.pass,'user',this.id).subscribe((data)=>{
          if(data == 'success'){
            flag ++;
          }else{
            alert("Sorry, registration not done...");
          }
          if(flag == 2){
            alert("Details added....");
          }
        })
        that.resetObj();
      }else{
        this.passValid = false;
      }
    }
  }

  goToReg(reg){
    if(reg == 'As Member'){
      this.router.navigateByUrl('register-member')
    }else{
      this.router.navigateByUrl('register-user')
    }
  }

  goToLogin(){
    this.router.navigateByUrl('login')
  }
  
  goToHome(){
    this.router.navigateByUrl("home")
  }
}


