import { Injectable } from '@angular/core';
import {Commenti} from '../models/Commenti';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class CommentiService {
  commenti: Commenti[];
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCommenti(): Observable<Commenti[]> {
    return this.http.get<Commenti[]>(this.url);
  }

  postCommenti(commento: Commenti): Observable<Commenti> {
    return this.http.post<Commenti>(this.url, commento, this.httpOptions);
  }

}
