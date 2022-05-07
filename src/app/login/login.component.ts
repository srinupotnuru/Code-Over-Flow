import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public username: string = "";
  public password: string = "";

  private loginSubscription!: Subscription;

  constructor(private authService: LoginService, private toastService: ToastrService, private router: Router) { }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

  public login() {
    this.loginSubscription = this.authService.loginUser({
      regdNumber: this.username,
      password: this.password
    }).subscribe(result=>{
      if(result.success){
        sessionStorage.setItem('user', JSON.stringify(result.data));
        this.router.navigate(['home']);
      }else {
        this.toastService.error(result.message);
      }
    });
  }

}
