import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

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

    const finalObs = merge(sourceTech, sourceComedy, sourceNews)

    finalObs.subscribe(res => {
      this._dus.print(res, 'elContainer')
    })
  }

}
