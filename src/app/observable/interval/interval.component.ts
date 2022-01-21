import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg;

  constructor(private _designUtilityService: DesignUtilityService) { }

  videoSubscription: Subscription;

  tanzeel: Subscription;

  tabish: Subscription;

  ngOnInit(): void {

    // interval
    const broadcastVideos: Observable<any> = interval(1000);
    this.videoSubscription = broadcastVideos.subscribe((res) => {
      this._designUtilityService.print("Video " + res, "elContainer")
      if (res > 4) {
        this.videoSubscription.unsubscribe();
      }
    });

    this.tanzeel = broadcastVideos.subscribe((res) => {
      this._designUtilityService.print("Video " + res, "elContainer2");
      if (res > 6) {
        this.tanzeel.unsubscribe();
      }
    });


    // timer
    const broadcastMusic = timer(5000, 300);
    this.tabish = broadcastMusic.subscribe((res) => {
      this._designUtilityService.print("Video " + res, "elContainer3");
      if (res > 9) {
        this.tabish.unsubscribe();
      }
    })

  }

}
