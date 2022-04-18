import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/models/Card';
import { MemorizationCardsService } from 'src/shared/services/memorization-cards.service';
import { OpenCardsStorageService } from 'src/shared/services/open-cards-storage.service';

@Component({
  selector: 'app-memorization',
  templateUrl: './memorization.component.html',
  styleUrls: ['./memorization.component.less']
})
export class MemorizationComponent implements OnInit {
  constructor(
    public cardsService: MemorizationCardsService,
    public openCardsStorageService: OpenCardsStorageService
  ) { }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  addCard(card: Card): void {
    this.cardsService.addCard(card);
  }

  deleteCard(card: Card): void {
    this.cardsService.deleteCard(card);
    this.openCardsStorageService.deleteCard(card.id!);
  }

  closeAllCards(): void {
    this.cardsService.cards.forEach(card => {
      this.openCardsStorageService.closeCard(card.id!);
    });
  }

  flipCard(card: Card): void {
    this.openCardsStorageService.flipCard(card.id!);
  }

}
