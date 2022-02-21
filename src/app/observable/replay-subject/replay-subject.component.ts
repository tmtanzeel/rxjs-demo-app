import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  methodInterval: boolean = false;
  user1List = [];
  user2List = [];
  user3List = [];

  intSubscription: Subscription;

  // subscription
  subscription2: Subscription;
  subscription3: Subscription;

  // subscribe modes
  subscribeMode2;
  subscribeMode3

  constructor(private _dus: DesignUtilityService) { }

  ngOnInit() {
    this._dus.videoEmit.subscribe(res => {
      this.user1List.push(res);
    });
  }

  toggleMethod() {
    const broadCastVideo = interval(1000);

    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe(res => {
        this._dus.videoEmit.next('video ' + res)
      })
    } else {
      this.intSubscription.unsubscribe();
    }


    this.methodInterval = !this.methodInterval;
  }

  onVideoAdd(videoValue) {
    this._dus.videoEmit.next(videoValue);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    }
    else {
      this.subscription2 = this._dus.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;

  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    }
    else {
      this.subscription3 = this._dus.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

}
