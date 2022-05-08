import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    regdNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber : new FormControl('', [Validators.required, Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)]),
  });
  private registerSubscription!: Subscription;

  constructor(private authService: LoginService, private toastService: ToastrService, private router: Router) { }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

  public register() {
    if(!this.registrationForm.valid)
      return this.registrationForm.markAllAsTouched();

    let payload = {...this.registrationForm.value, userType: 'STUDENT'};
    this.registerSubscription = this.authService.registerUser(payload).subscribe(result=>{
      if(result.success){
        this.toastService.success('Please check your email for otp.');
        this.router.navigate(['verify'], {
          queryParams: payload
        });
      }
      else {
        this.toastService.error(result.message);
      }
    });
  }

}
