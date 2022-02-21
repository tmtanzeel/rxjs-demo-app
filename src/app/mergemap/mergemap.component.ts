import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

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
          this._dus.print(res, 'elContainer')
        })
      })

    this.source.pipe(map(res => this.mimicServerResponse(res)), mergeAll())
      .subscribe(res => {
        console.log(res);
      })

    this.source.pipe(mergeMap(res => this.mimicServerResponse(res)))
      .subscribe(res => {
        console.log(res);
      })
  }

  mimicServerResponse(value) {
    return of('Video of ' + value);
  }



}
