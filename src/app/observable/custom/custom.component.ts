import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  techStatus: string;
  techStatus2: string;
  names;
  nameStatus;
  subs2: Subscription;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {

    // Eg 01 : Manual
    const cusObs1 = Observable.create(observer => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Html and Css');
        //observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
        //observer.error(new Error('Limit Exceed'))
      }, 4000);

      setTimeout(() => {
        observer.next('Jquery');
      }, 5000);

    })

    cusObs1.subscribe(res => {
      console.log(res);
      this._designUtilityService.print(res, 'elContainer')
    },
      (err) => {
        this.techStatus = 'error'
      },
      () => {
        this.techStatus = 'completed';
      }
    )


    // Eg 2 : Automaticaly emitting at a set interval
    const skills = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript'];
    const cusObs2 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next("Lecture on " + skills[count++])
        if (count > 4) {
          //observer.complete();
          observer.error(new Error("Limit Exceed"))
        }
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res) => {
      this._designUtilityService.print(res, "elContainer2")
    },
      (err) => { this.techStatus2 = 'error' },
      () => { this.techStatus2 = 'completed' }
    )


    // Eg - 03 (Names)
    const name = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert']
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(name[count]);

        if (count >= 3) {
          //observer.error('Error Emit')
        }

        if (count >= 6) {
          observer.complete()
        }
        count++;
      }, 1000)
    })

    cusObs3.subscribe(res => {
      console.log(res);
      this.names = res;
    },
      (err) => {
        this.nameStatus = 'error'
      },
      () => {
        this.nameStatus = 'completed';
      })
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
