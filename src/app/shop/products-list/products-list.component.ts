import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  compteur: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onAdd(){
    this.compteur++;
  }

  public onDelete(){
    this.compteur--;
  }
}
