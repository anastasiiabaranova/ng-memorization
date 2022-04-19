import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
