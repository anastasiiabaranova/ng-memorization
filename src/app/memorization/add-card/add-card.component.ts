import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.less']
})
export class AddCardComponent {

  @Output()
  add = new EventEmitter<Card>();

  form = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  submit(): void {
    const formData = this.form.getRawValue();

    const card: Card = {
      name: formData['name'],
      description: formData['description'],
    }
    
    this.add.emit(card);

    this.form.reset();
  }

}
