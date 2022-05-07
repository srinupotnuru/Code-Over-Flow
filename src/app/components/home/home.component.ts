import { Component, OnInit } from '@angular/core';
import LoadingService from '../../../services/loading.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;
  constructor() { 
    LoadingService.loadingEvent.subscribe(result=>{
      this.loading = result;
    });
  }

  ngOnInit(): void {

  }

}
