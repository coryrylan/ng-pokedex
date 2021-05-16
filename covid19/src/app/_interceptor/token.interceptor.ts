import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { catchError, finalize, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable(
 
)
export class TokenInterceptor implements HttpInterceptor {
  
  constructor(
   private ngxService:NgxUiLoaderService
  ) {
    
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxService.start();
request= request.clone({setHeaders:{
  "x-rapidapi-key": "b1216c84femsh669c0b744b7f4b5p1f81fdjsn06631e1018bd",
	"x-rapidapi-host": "covid-193.p.rapidapi.com",

}})

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
          let message = '';
          if (error.error instanceof ErrorEvent) {
              // handle client-side error
              debugger
              message = `Error: ${error.error.message}`;
          } else {
              // handle server-side error
              message = `Error Status: ${error.status}\nMessage: ${error.message}`;
          }
          console.log(message);
          return throwError(message);
      }),
      
      finalize(()=>
      this.ngxService.stop()
      )
  )
}

  }

