import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [ToolbarModule, ButtonModule, SplitButtonModule],
    standalone: true
})
export class NavbarComponent {

}
