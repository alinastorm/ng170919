import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Input()
public title: string;
@Input()
public sidenav: MatSidenav;

public sidenavtoggle(): void {
  this.sidenav.toggle();
}
}
