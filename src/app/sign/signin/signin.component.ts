import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm!:FormGroup;

  constructor(private router: Router, private route:ActivatedRoute, private fb: FormBuilder, private loginService: LoginService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(){
    this.signInForm = this.fb.group({
      regdnumber:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  get regdnumber() {
    return this.signInForm.get('regdnumber');
  }

  get password(){
    return this.signInForm.get('password');
  }

  onSubmit(){
    console.log("the data is ", this.signInForm.value)
    this.loginService.loginUser({'regdNumber':this.regdnumber?.value, 'password':this.password?.value}).subscribe((data:any)=>{
        console.log("The response i got form backend is", data);
        // cookie is set.
        this.cookieService.set('jwt',data.data)
    })
  }

}
