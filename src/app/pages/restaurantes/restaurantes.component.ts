import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  imports: [CardComponent],
  standalone: true
})
export class RestaurantesComponent {

  
}