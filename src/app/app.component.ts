import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NavBarComponent} from '../app/components/nav-bar/nav-bar.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import LoadingService from '../services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CODE-OVER-FLOW';
  public loading: boolean = false;
  
  constructor(){
    LoadingService.loadingEvent.subscribe(result=>{
      this.loading = result;
    });
  }
  
}
