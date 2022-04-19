import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';
import {HttpClient} from '@angular/common/http';

const host = 'http://localhost:3000';

@Injectable()
export class MemorizationCardsApiService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(host);
  }

  add(card: Card): Observable<void> {
    return this.httpClient.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

}
