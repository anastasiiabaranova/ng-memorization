import { Inject, Injectable } from '@angular/core';
import { IMemorizationCardsApiService, IMemorizationCardsApiServiceToken } from '../interfaces/IMemorizationCardsApiService';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class MemorizationCardsService {
  private _cards: Card[] = [];

  constructor(
    @Inject(IMemorizationCardsApiServiceToken)
    private apiService: IMemorizationCardsApiService
  ) { }

  get cards(): Card[] {
    return this._cards;
  }

  initialize() {
    this.apiService.getAll().subscribe(cards => {
      this._cards = cards;
    });
  }

  addCard(card: Card): void {
    this.apiService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  deleteCard(card: Card): void {
    this.apiService.delete(card.id!).subscribe(() => {
      this.initialize();
    });
  }
}
