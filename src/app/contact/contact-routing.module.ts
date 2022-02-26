import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './contact.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
