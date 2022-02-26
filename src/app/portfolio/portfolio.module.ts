import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainComponent } from './main/main.component';
import { ShareModule } from '../share/share.module';
import { CardsComponent } from './cards/cards.component';
import { LinksComponent } from './links/links.component';


@NgModule({
  declarations: [
    MainComponent,
    CardsComponent,
    LinksComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ShareModule
  ]
})
export class PortfolioModule { }
