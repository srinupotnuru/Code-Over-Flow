import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';



@Injectable({ providedIn: 'root' })
export class CompilerService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
    }
    apiUrl = environment.apiUrl + '/compile/compile';
    compile(dataa :any):Observable<any>{
        let data = {
            "language_id":71,
            "source_code": btoa("print('Hello World')")
        }
        return this.post(this.apiUrl,dataa);
    }

}