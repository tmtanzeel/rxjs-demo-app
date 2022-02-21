import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName: string = '';

  constructor(private _designUtilityService: DesignUtilityService) { }


  onChange(uname) {
    this.userName = uname.value;
    this._designUtilityService.userName.next(uname.value);
  }

  ngOnInit() {
    this._designUtilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

}
