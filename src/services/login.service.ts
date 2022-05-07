import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';



@Injectable({ providedIn: 'root' })
export class LoginService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
    }
    apiUrl = environment.apiUrl + '/auth';

    loginUser(data:any): Observable<any> {
        return this.post(`${this.apiUrl}/login`, data);
    }
    registerUser(data:any): Observable<any> {
        return this.post(`${this.apiUrl}/register`, data);
    }
    verifyUser(data:any): Observable<any> {
        return this.post(`${this.apiUrl}/verify-otp`, data);
    }

}