import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Eg 1 : using interval
    const obs1 = interval(1000);
    obs1.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    })

    // Eg 2 : using Array of Objects
    const users = [
      { name: 'Anup', skill: 'Angular' },
      { name: 'Shekhar', skill: 'Html, Css' },
      { name: 'Sharma', skill: 'JavaScript' },
      { name: 'Uxtrendz', skill: 'TypeScript' }
    ]

    const obs2 = from(users);
    // normal stream
    obs2.subscribe((res) => {
      console.log(res);
    })

    // for changing stream back to array of objects
    // for clarity created a new varibale obs3
    const obs3 = from(users);
    obs3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    })

    // from discrete values/arguments
    const obs4 = of('Alice', 'John', 'Tanzeel', 'Richards');
    obs4.pipe(toArray()).subscribe((res) => {
      console.log(res);
    })

    // from string
    const obs5 = from("Hello world!");
    obs5.pipe(toArray()).subscribe((res) => {
      console.log(res);
    })
  }

}
