import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';



@Injectable({ providedIn: 'root' })
export class BlogService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
    }
    apiUrl = environment.apiUrl + '/blog';

    createBlog(data:any): Observable<any> {
        return this.post(`${this.apiUrl}/create`, data);
    }

    getAllBlogs(): Observable<any> {
        return this.get(`${this.apiUrl}/get-all`);
    }

    getMyBlogs(id:string): Observable<any> {
        return this.get(`${this.apiUrl}/get-my-blogs/`+id);
    }

    getBlog(id:string): Observable<any> {
        return this.get(`${this.apiUrl}/get-blog/`+id);
    }
}