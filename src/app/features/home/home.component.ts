import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,

})
export class HomeComponent {

  public openManualRegion(){
    console.log('openManualRegion')
  }

  public requestLocation(){
    console.log('openManualRegion')
  }

}
