import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  source = from(['Tech', 'Comedy', 'News']);

  constructor(private _dus: DesignUtilityService) { }


  ngOnInit() {
    this.source.pipe(map(res => this.mimicServerResponse(res)))
      .subscribe(res => {
        res.subscribe(res2 => {
          this._dus.print(res2, 'elContainer');
        })
      })

    this.source.pipe(map(res => this.mimicServerResponse(res)), mergeAll())
      .subscribe(res => {
        this._dus.print(res, 'elContainer2');
      })

    this.source.pipe(mergeMap(res => this.mimicServerResponse(res)))
      .subscribe(res => {
        this._dus.print(res, 'elContainer3');
      })
  }

  mimicServerResponse(value) {
    return of('Video of ' + value).pipe(delay(2000));
  }
}
