import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenCardsStorageService {
  openCard(id: string): void {
    localStorage.setItem(id, 'true');
  }

  closeCard(id: string): void {
    localStorage.setItem(id, 'false');
  }

  flipCard(id: string): void {
    if (this.isOpen(id)) {
      this.closeCard(id);
    } else {
      this.openCard(id);
    }
  }

  deleteCard(id: string): void {
    localStorage.removeItem(id);
  }

  isOpen(id: string): boolean {
    return localStorage.getItem(id) === 'true';
  }
}
