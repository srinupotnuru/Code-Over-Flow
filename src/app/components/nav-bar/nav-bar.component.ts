import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  public user:any = JSON.parse(sessionStorage.getItem('user') as string);

  ngOnInit(): void {
  }
  toggleNavbar(){
    let nav:any = document.getElementById('navigation');
    nav.classList.toggle('navigation--visible');
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
