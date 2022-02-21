import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {


  userName: string = '';

  constructor(private _designUtilityService: DesignUtilityService) { }

  onChange(uname) {
    this._designUtilityService.userName.next(uname.value);
  }

  ngOnInit() {
    this._designUtilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

}
