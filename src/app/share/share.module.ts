import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    TitleComponent,
    CopyrightComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CopyrightComponent,
    ResumeComponent
  ]
})
export class ShareModule { }
