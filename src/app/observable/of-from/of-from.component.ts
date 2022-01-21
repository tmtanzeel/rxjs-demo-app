import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obMsg;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {

    // of
    // discrete values/arguments
    const obs1 = of('Apple', 'Banana', 'Plum', 'Strawberry');
    obs1.subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer')
    })

    // object
    const employee = {
      firstname: "Tanzeel",
      lastname: "Mirza",
      designation: "Fullstack Developer"
    }
    const obs2 = of(employee);
    obs2.subscribe((res) => {
      this.obMsg = res;
    })

    // from
    // array
    const skills = ['Java/JavaFX', 'Angular', 'React', 'RxJS', 'GitHub'];
    const obs3 = from(skills);
    obs3.subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer3');
    })

    //promise
    const promiseVariable = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promise was kept");
      }, 3000)
    })

    promiseVariable.then((response) => {
      console.log("Response", response);
    })

    const obs4 = from(promiseVariable);
    obs4.subscribe((res) => {
      this._designUtilityService.print(res, "elContainer4")
    })

    // String
    const obs5 = from("Hello World!");
    obs5.subscribe((res) => {
      this._designUtilityService.print(res, "elContainer5")
    })

  }

}
