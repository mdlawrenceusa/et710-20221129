import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css'],
})
export class ParksComponent {
  products = products;
}
