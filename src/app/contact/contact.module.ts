import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainComponent } from './main/main.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareModule
  ]
})
export class ContactModule { }
