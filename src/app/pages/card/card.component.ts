import { TagModule } from 'primeng/tag';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CardModule, TagModule, ButtonModule],
    standalone: true
})
export class CardComponent {

}
