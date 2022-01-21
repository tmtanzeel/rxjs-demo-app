import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mySubscription: Subscription = Subscription.EMPTY;

  constructor() { }

  ngOnInit() {
    let count = 0;
    const marks = [12, 23, 34, 43, 11, 26];
    //let observableSource = Observable.create((observer) => {
    let observableSource = Observable.create((observer) => {
      setInterval(() => {
        observer.next(marks[count++]);
        // if (count >= marks.length) {
        //   this.mySubscription.unsubscribe();
        // }
      }, 1000)
    })

    this.mySubscription = observableSource.pipe(
      map(data => data))
      .subscribe((res) => {
        console.log(res);
      })
  }

}
