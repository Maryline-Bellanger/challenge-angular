import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccueilComponent
  ]
})
export class HomeModule { }
