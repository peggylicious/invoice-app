import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreviousUrlService {
  private previousUrl: string | any;
  private currentUrl: string | any;
  private routeHistory: any[] = [];
  private isClicked: boolean = false;
  constructor(public router: Router) {
    this.currentUrl = this.router.url;
    console.log('Current URL, ', this.currentUrl);
    // this.previousUrl = null;
    if (this.isClicked) {
      this.routeHistory.pop();
      this.isClicked = false;
    }
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        // Do something
        //  console.log(e.url)
        this.previousUrl = this.currentUrl;
        this.currentUrl = e.url;
        console.log('Current URL, ', this.currentUrl);
        console.log('Previous URL, ', this.previousUrl);
        if (!this.isClicked === false) {
          // this.routeHistory.pop();
          // this.isClicked = false;
        this.routeHistory.push(this.previousUrl);

        }
        console.log(this.routeHistory);
      });
  }

  public getPreviousUrl() {
    this.isClicked = true;
    const lastVisited = this.routeHistory[this.routeHistory.length - 1];
    // this.routeHistory.pop()
    return lastVisited;
  }
}
