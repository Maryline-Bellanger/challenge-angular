import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { ProductsListComponent } from './shop/products-list/products-list.component';

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'shop', component : ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
