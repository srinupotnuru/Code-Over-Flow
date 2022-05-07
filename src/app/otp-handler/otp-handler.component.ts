import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp-handler',
  templateUrl: './otp-handler.component.html',
  styleUrls: ['./otp-handler.component.scss']
})
export class OtpHandlerComponent implements OnInit {

  constructor(private authService: LoginService, private toastService: ToastrService, private router: Router, private route: ActivatedRoute) { }
  private registerSubscription!: Subscription;


  public registrationForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  public register(){
    if(!this.registrationForm.valid)
      return this.registrationForm.markAllAsTouched();

    let payload = {...this.registrationForm.value, ...this.route.snapshot.queryParams};
    this.registerSubscription = this.authService.verifyUser(payload).subscribe(result=>{
      if(result.success){
        this.toastService.success('Registration Successfull.');
        this.router.navigate(['login']);
      }
      else {
        this.toastService.error(result.error);
      }
    });
  }

}
