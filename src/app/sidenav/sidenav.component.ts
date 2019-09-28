import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  @Output() public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();
  @ViewChild('drawer', { static: true })
  public drawer: MatSidenav;

  ngOnInit() {
    this.setSideNavControl.emit(this.drawer);
    console.log(this.setSideNavControl);

  }

}

