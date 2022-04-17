import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorizationComponent } from './memorization.component';
import { CardComponent } from './card/card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { IMemorizationCardsApiServiceToken } from 'src/shared/interfaces/IMemorizationCardsApiService';
import { MemorizationCardsMockApiService } from 'src/shared/services/memorization-cards-mock-api.service';



@NgModule({
  declarations: [
    MemorizationComponent,
    CardComponent,
    AddCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
  ],
  exports: [
    MemorizationComponent
  ],
  providers: [
    {provide: IMemorizationCardsApiServiceToken, useClass: MemorizationCardsMockApiService}
  ]
})
export class MemorizationModule { }
