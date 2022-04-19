import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMemorizationCardsApiService } from '../interfaces/IMemorizationCardsApiService';
import { Card } from '../models/Card';

const cards: Card[] = [
  {
    id: "0",
    name: 'Diplograph',
    description: 'An instrument used for double writing, as one for producing embossed writing for the blind and ordinary writing at the same time.'
  },
  {
    id: "1",
    name: 'Equiponderate',
    description: 'To be equal in weight or force'
  },
  {
    id: "2",
    name: 'Quatridual',
    description: 'Lasting four days'
  },
  {
    id: "3",
    name: 'Humanitarianism',
    description: 'Doctrine that the highest moral obligation is to improve human welfare'
  },
  {
    id: "4",
    name: 'Warrantise',
    description: 'The act of guaranteeing or warranting; an assurance'
  },
  {
    id: "5",
    name: 'Zenzizenzizenzic',
    description: 'Eighth power of a number'
  }
]

@Injectable({
  providedIn: 'root'
})
export class MemorizationCardsMockApiService implements IMemorizationCardsApiService {
  private _cards = cards;

  getAll(): Observable<Card[]> {
    return of(this._cards);
  }

  add(card: Card): Observable<void> {
    this._cards.push(Object.assign({...card}, {id: this._cards.length}));
    return of(void 0);
  }

  delete(id: string): Observable<void> {
    this._cards = this._cards.filter(c => c.id !== id);
    return of(void 0);
  }
}
