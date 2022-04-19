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
      this._cards.push(card);
    });
  }

  deleteCard(card: Card): void {
    this.apiService.delete(card.id!).subscribe(() => {
      this._cards = this._cards.filter(c => c.id !== card.id);
      localStorage.removeItem(card.id!);
    });
  }

  openCard(id: string): void {
    localStorage.setItem(id, 'true');
  }

  closeCard(id: string): void {
    localStorage.setItem(id, 'false');
  }

  flipCard(id: string): void {
    if (this.isOpen(id)) {
      this.closeCard(id);
      return;
    }
    this.openCard(id);
  }

  isOpen(id: string): boolean {
    return localStorage.getItem(id) === 'true';
  }
}
