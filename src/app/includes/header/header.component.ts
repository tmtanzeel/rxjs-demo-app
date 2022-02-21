import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navOpen: boolean = true;

  exclusive: boolean = false;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {
    this._designUtilityService.exclusive.subscribe(res => {
      this.exclusive = res
    })
  }

  onNavToggle() {
    this.navOpen = !this.navOpen
  }

}
