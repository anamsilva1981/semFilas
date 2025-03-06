import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet, NavbarComponent, FooterComponent, ButtonModule],
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNGConfig) {}

  ngOnInit() {
    this.primeng.ripple = true;
  }
}
