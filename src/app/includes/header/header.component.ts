import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onNavToggle() {
    this.navOpen = !this.navOpen
  }

}
