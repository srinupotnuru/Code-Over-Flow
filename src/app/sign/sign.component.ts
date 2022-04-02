import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})


export class SignComponent implements OnInit, AfterViewInit {

  @ViewChild('tab') tab!:ElementRef;


  constructor() { }

  
  ngAfterViewInit(): void {
    console.log("The element i got is", this.tab);
  }

  ngOnInit(): void {
    console.log("I got called inside SignComponent")
  }

  

}
