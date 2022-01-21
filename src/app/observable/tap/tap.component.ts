import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  arr = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];
  colors = ['Red', 'Green', 'Blue', 'Orange', 'Salmon', 'Purple', 'Violet'];
  currentColor: string = '';

  observableStream1: Observable<any>;
  observableStream2: Observable<any>;
  subscription1: Subscription = Subscription.EMPTY;
  subscription2: Subscription = Subscription.EMPTY;

  constructor(
    private _designUtilityService: DesignUtilityService
  ) {
    this.observableStream1 = interval(1000);
    this.observableStream2 = interval(1500);
  }

  ngOnInit() {
    // Ex 01
    this.subscription1 = this.observableStream1
      .pipe(
        tap(res => {
          if (res > 4) {
            this.subscription1.unsubscribe();
          }
        }),
        map(res => {
          return this.arr[res];
        }),
        tap(res => {
          console.log(res);
        })
      )
      .subscribe(res => {
        //console.log(res);
        this._designUtilityService.print(res, 'elContainer')
      })

    // Ex 02 : Change color
    this.subscription2 = this.observableStream2
      .pipe(
        tap(res => {
          if (res > 6) {
            this.subscription2.unsubscribe();
          }
        }),
        map(res => this.colors[res]))
      .subscribe(res => {
        this.currentColor = res;
        this._designUtilityService.print(res, 'elContainer2')
      })
  }

}
