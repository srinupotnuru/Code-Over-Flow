import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  onRegistrationPage:boolean = false;  // false => registration form , true => login form
  otpSent:boolean = false;
  signupform!:FormGroup;
  userEmail!:string;
  emailError!:boolean;
  signupformError:boolean= false; // becomes true when user press on submit without filling values;

  constructor(private loginService:LoginService, private route:ActivatedRoute, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.signupform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      regdnumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      otp:['',[Validators.required]]

    });
  }

  onSubmit() : void{
    if(this.signupform.valid==false){
      console.log("The form is invalid")
      this.signupformError=true;
    }
    else{
      this.signupformError=false;
      this.loginService.verifyOtp({
        'firstName':this.firstname?.value,
        'lastName':this.lastname?.value,
        'regdNumber':this.regdnumber?.value,
        'password':this.password?.value,
        'email':this.email?.value,
        'phoneNumber':this.phonenumber?.value,
        'otp':this.otp?.value
      }).subscribe((data)=>{
        console.log("successfully submitteed")
      })
    }
  }

  sendOtp():void{
    this.loginService.registerUser({'email':this.email?.value}).subscribe((data)=>{
      this.otpSent= true;
      console.log("The mail is sent to the email ", this.email?.value)
    })
  }

  get firstname() {
    return this.signupform.get('firstname');
  }
 
  get lastname() {
    return this.signupform.get('lastname');
  }
 
  get email() {
    return this.signupform.get('email');
  }
 
  get regdnumber() {
    return this.signupform.get('regdnumber');
  }
 
  get phonenumber() {
    return this.signupform.get('phonenumber');
  }
 
  get password() {
    return this.signupform.get('password');
  }

  get otp(){
    return this.signupform.get('otp');
  }
 

}
