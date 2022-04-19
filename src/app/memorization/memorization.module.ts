import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorizationComponent } from './memorization.component';
import { IMemorizationCardsApiServiceToken } from 'src/shared/interfaces/IMemorizationCardsApiService';
import { MemorizationCardsApiService } from 'src/shared/services/memorization-cards-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCardModule } from './add-card/add-card.module';
import { CardModule } from './card/card.module';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    MemorizationComponent,
  ],
  imports: [
    CommonModule,
    AddCardModule,
    CardModule,
    TuiButtonModule,
    HttpClientModule,
  ],
  exports: [
    MemorizationComponent
  ],
  providers: [
    {provide: IMemorizationCardsApiServiceToken, useClass: MemorizationCardsApiService}
  ]
})
export class MemorizationModule { }
