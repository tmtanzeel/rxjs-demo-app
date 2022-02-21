import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  userName

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {
    this._designUtilityService.exclusive.next(true);
    this._designUtilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnDestroy() {
    this._designUtilityService.exclusive.next(false);
  }

}
