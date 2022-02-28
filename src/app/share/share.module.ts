import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ResumeComponent } from './resume/resume.component';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [
    TitleComponent,
    CopyrightComponent,
    ResumeComponent,
    SortComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CopyrightComponent,
    ResumeComponent,
    SortComponent
  ]
})
export class ShareModule { }
