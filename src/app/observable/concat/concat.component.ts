import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private _dus: DesignUtilityService) { }

  ngOnInit() {
    const sourceTech = interval(1000).pipe(
      map(v => 'Tech Video #' + v),
      take(3));

    const sourceComedy = interval(1000).pipe(
      map(v => 'Comedy Video #' + v),
      take(5));

    const sourceNews = interval(2000).pipe(
      map(v => 'News Video #' + v),
      take(2));

    // sourceTech.subscribe(res => {
    //   this._dus.print(res, 'elContainer')
    // })

    // sourceComedy.subscribe(res => {
    //   this._dus.print(res, 'elContainer')
    // })

    // sourceNews.subscribe(res => {
    //   this._dus.print(res, 'elContainer')
    // })

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)

    finalObs.subscribe(res => {
      this._dus.print(res, 'elContainer')
    })
  }

}
