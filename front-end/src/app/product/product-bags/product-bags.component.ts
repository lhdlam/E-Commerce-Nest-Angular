import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-bags',
  templateUrl: './product-bags.component.html',
  styleUrls: ['./product-bags.component.css']
})
export class ProductBagsComponent implements OnInit {

  openMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.openMenu = !this.openMenu
    console.log('VALUE', this.openMenu)
  }
}
