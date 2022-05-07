import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, finalize } from 'rxjs';
import LoadingService from '../services/loading.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

    constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    LoadingService.show();
    return next.handle(req).pipe(
        finalize(()=>{
            LoadingService.hide();
        })
    );
  }
}