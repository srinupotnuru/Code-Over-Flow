import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-management',
  templateUrl: './auth-management.component.html',
  styleUrls: ['./auth-management.component.scss']
})
export class AuthManagementComponent implements OnInit {

  constructor(private router: Router) {
    this.checkAuthState();
   }

  ngOnInit(): void {
  }

  private checkAuthState(){
    setTimeout(()=>{
      if('user' in sessionStorage){
        this.router.navigate(['home']);
      }
      else {
        sessionStorage.clear();
        this.router.navigate(['login']);
      }
    }, 1000);
  }

}
