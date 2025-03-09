import { TagModule } from 'primeng/tag';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Restaurantes } from '../../interfaces/restaurant.interface';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CardModule, TagModule, ButtonModule, NgFor, HttpClientModule],
  standalone: true,
})
export class CardComponent {
  constructor(private restaurantesService: RestaurantesService) {}

  public restaurantes: Restaurantes[] = [];

  ngOnInit(): void {
    this.restaurantesService.getAllRestaurantes().subscribe(
      (data) => {
        this.restaurantes = data;
      },
      (error) => {
        console.error('Erro ao carregar os restaurantes', error);
      }
    );
  }
}
