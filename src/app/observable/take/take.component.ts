import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  randomNames = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];

  observableStream1: Observable<any>;
  observableStream2: Observable<any>;
  observableStream3: Observable<any>;

  subscription1: Subscription = Subscription.EMPTY;
  subscription2: Subscription = Subscription.EMPTY;
  subscription3: Subscription = Subscription.EMPTY;

  constructor(
    private _designUtilityService: DesignUtilityService
  ) {
    this.observableStream1 = interval(1000);
    this.observableStream2 = interval(1000);
    this.observableStream3 = interval(1000);
  }

  customCondition = interval(5000);
  customCondition2 = fromEvent(document, 'click');

  ngOnInit() {
    // Ex 01 : take
    this.subscription1 = this.observableStream1
      .pipe(take(5))
      .subscribe(res => {
        this._designUtilityService.print(this.randomNames[res], 'elContainer')
      })

    // Ex 02 : takeLast
    // wrong
    // correct way is to create observable stream using from
    this.subscription2 = this.observableStream2
      .pipe(takeLast(3))
      .subscribe(res => {
        //console.log(this.randomNames[res]);
        this._designUtilityService.print(res, 'elContainer2')
      })

    // Ex 03 : takeUntil
    this.subscription3 = this.observableStream3
      .pipe(takeUntil(this.customCondition)) // or customCondition2
      .subscribe(res => {
        //console.log(res);
        this._designUtilityService.print(this.randomNames[res], 'elContainer3')
      })
  }

}
