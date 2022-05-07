import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';



@Injectable({ providedIn: 'root' })
export class QuestionService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
    }
    apiUrl = environment.apiUrl + '/question';
    // compile(dataa :any):Observable<any>{
    //     console.log(dataa);
    //     let data = {
    //         "language_id":71,
    //         "source_code": btoa("print('Hello World')")
    //     }
    //     console.log(data)
    //     return this.post(this.apiUrl,dataa);
    // }
    createQuestion(data:any):Observable<any>{
        return this.post(`${this.apiUrl}/question`, data); 
    }

    getQuestion(id:string):Observable<any>{
        return this.get(`${this.apiUrl}/get-question/`+id);
    }

    getAllQuestions():Observable<any>{
        return this.get(`${this.apiUrl}/get-questions`);
    }
    getTestCaseResults(id:string,compileData:any):Observable<any>{
        return this.get(`${this.apiUrl}/test-case-results/`+id,compileData);
    }

}