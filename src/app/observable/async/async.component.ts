import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  value;

  constructor(private _dus: DesignUtilityService) { }

  ngOnInit() {
    this._dus.asyncVideoEmit.subscribe(res => {
      this.value = res;
    })
  }

  onVideoAdd(videoValue) {
    this._dus.asyncVideoEmit.next(videoValue);
  }

  completeSubscription() {
    this._dus.asyncVideoEmit.complete();
  }

}