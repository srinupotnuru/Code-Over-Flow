import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class BaseService {


  constructor(protected http: HttpClient) {
  }

  static materialBuster = new Subject<void>();


  public queue = [];
  

  public get<T>(url: string, requestBody?: any): Observable<T> {
    return this.http.get<T>(url, { headers: httpOptions.headers, params: requestBody }).pipe(
      catchError((error) => this.handleError(error))// then handle the error
    );
  }

  public post<T>(url: string, requestBody?: any): Observable<any> {
    return this.http.post<T>(url, requestBody, { headers: httpOptions.headers }).pipe(
      catchError((error) => this.handleError(error))// then handle the error
    );
  }

  public put<T>(url: string, requestBody: any): Observable<any> {
    return this.http.put<T>(url, requestBody, { headers: httpOptions.headers }).pipe(
      catchError((error) => this.handleError(error))// then handle the error
    );
  }

  public delete<T>(url: string): Observable<any> {
    return this.http.delete<T>(url);
  }

  protected handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(JSON.stringify(error));
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
