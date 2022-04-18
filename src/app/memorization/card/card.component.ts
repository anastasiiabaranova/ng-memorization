import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as debounce from 'debounce';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() card!: Card;
  @Input() flipped: boolean = false;

  @Output()
  delete = new EventEmitter<Card>();
  @Output()
  flip = new EventEmitter<Card>();

  flipCard = debounce(this.onCardFlip, 800, true)
  deleted = false;

  deleteCard() {
    this.deleted = true;
    this.delete.emit(this.card);
  }

  private onCardFlip(): void {
    if (!this.deleted) {
      this.flip.emit(this.card);
    }
  }

}
