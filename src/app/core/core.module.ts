import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { ContactModule } from '../contact/contact.module';
import { ShopModule } from '../shop/shop.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeModule,
    ContactModule,
    ShopModule
  ]
})
export class CoreModule { }
