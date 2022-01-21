import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { filter, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'Female' },
    { id: 3, name: 'Ashish', gender: 'Male' },
    { id: 4, name: 'Vivek', gender: 'Male' },
    { id: 5, name: 'Janet', gender: 'Female' },
    { id: 6, name: 'Mounika', gender: 'Female' },
    { id: 7, name: 'Rajesh', gender: 'Male' },
    { id: 8, name: 'Sanjana', gender: 'Female' },
    { id: 9, name: 'Neha', gender: 'Female' },
    { id: 10, name: 'Sakshi', gender: 'Female' },
    { id: 11, name: 'Neeraj', gender: 'Male' },
    { id: 12, name: 'Pradeep', gender: 'Male' },
  ];

  data;
  data2;
  data3;

  observableData: Observable<any>;
  subscription1: Subscription = Subscription.EMPTY;

  constructor() {
    this.observableData = from(this.dataArr);
  }

  ngOnInit() {

    // Ex 01 : By length | 6 characters
    this.subscription1 = this.observableData
      .pipe(filter(res => res.name.length > 6), toArray())
      .subscribe(res => {
        this.data = res;
      })

    // Ex 02 : By Gender | Show only Female
    this.subscription1 = this.observableData
      .pipe(filter(res => res.gender == 'Female'), toArray())
      .subscribe(res => {
        this.data2 = res;
      })

    // Ex 03 : till nth item
    this.subscription1 = this.observableData
      .pipe(filter(res => res.id < 6), toArray())
      .subscribe(res => {
        this.data3 = res;
      })
  }

}
