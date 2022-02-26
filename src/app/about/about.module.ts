import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { MainComponent } from './main/main.component';
import { ShareModule } from '../share/share.module';
import { BiographyComponent } from './biography/biography.component';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    MainComponent,
    BiographyComponent,
    PictureComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ShareModule
  ]
})
export class AboutModule { }
