import {Observable} from 'rxjs';
import {Card} from '../models/Card';
import {InjectionToken} from '@angular/core';

export const IMemorizationCardsApiServiceToken = new InjectionToken('IMemorizationCardsApiService');

export interface IMemorizationCardsApiService {
  getAll(): Observable<Card[]>;

  add(card: Card): Observable<void>;

  delete(id: string): Observable<void>;
}