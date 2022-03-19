import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    let nav:any = document.getElementById('navigation');
    nav.classList.toggle('navigation--visible');
  }

}
