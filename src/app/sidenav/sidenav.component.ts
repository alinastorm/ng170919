import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  @ViewChild('sidenav', { static: true })
  public sidenav: MatSidenav;
  constructor() { }
  ngOnInit() {
  }
  public toggle() {
    this.sidenav.toggle();
  }
}
