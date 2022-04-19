import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { AddCardComponent } from './add-card.component';



@NgModule({
  declarations: [
    AddCardComponent
  ],
  imports: [
    CommonModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextAreaModule,
  ],
  exports: [
    AddCardComponent
  ]
})
export class AddCardModule { }
