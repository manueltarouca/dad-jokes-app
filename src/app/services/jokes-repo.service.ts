import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class Joke {
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class JokesRepoService {

  endpoint = 'https://icanhazdadjoke.com/';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  }

  public getRandomJoke(): Observable<any>{
    return this.httpClient.get<Joke>(this.endpoint, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  private processError(error) {
    let message = '';
     if(error.error instanceof ErrorEvent) {
      message = error.error.message;
     } else {
      message = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(message);
     return throwError(message);
  }

}
