import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/models/Card';
import { MemorizationCardsService } from 'src/shared/services/memorization-cards.service';

@Component({
  selector: 'app-memorization',
  templateUrl: './memorization.component.html',
  styleUrls: ['./memorization.component.less']
})
export class MemorizationComponent implements OnInit {
  flippedCardId: string | undefined = undefined;

  constructor(public cardsService: MemorizationCardsService) {
  }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  addCard(card: Card): void {
    this.cardsService.addCard(card);
  }

  deleteCard(card: Card): void {
    this.cardsService.deleteCard(card);
  }

  flipCard(card: Card): void {
    this.flippedCardId = this.flippedCardId !== card.id ? card.id : undefined;
  }

}
