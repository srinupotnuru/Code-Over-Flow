import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NavBarComponent} from '../app/components/nav-bar/nav-bar.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CODE-OVER-FLOW';
  
  
  constructor(){
    
  }
  
}
