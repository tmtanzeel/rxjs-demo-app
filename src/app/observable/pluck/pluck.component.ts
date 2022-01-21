import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data;
  data2;
  data3;

  users = [
    {
      name: 'Anup',
      skills: 'Angular',
      job: {
        title: 'Fronend Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'Uxtrendz',
      skills: 'Html, Css',
      job: {
        title: 'Html Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'john',
      skills: 'Vuejs',
      job: {
        title: 'UI Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'Alex',
      skills: 'Javascript',
      job: {
        title: 'Javascript Developer',
        exp: '10 Years'
      }
    },
  ]

  constructor() { }

  ngOnInit() {
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe(res => {
        console.log(res);
        this.data = res;
      })

    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
      })
  }

}
