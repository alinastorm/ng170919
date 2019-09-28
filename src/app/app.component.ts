import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Курс по Angular 17.09';
  
  public sidenav: MatSidenav;

  public setsidenav(sidenav: MatSidenav) {
    console.log("2" + sidenav);
    Promise.resolve().then(() => this.sidenav = sidenav);

  }

}
