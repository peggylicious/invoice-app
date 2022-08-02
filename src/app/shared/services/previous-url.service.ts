import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PreviousUrlService {
 
  private previousUrl: string| any;
  private currentUrl: string | any ;
  constructor( public router: Router) { 
    this.currentUrl = this.router.url;
    console.log("Current URL, ", this.currentUrl)
        // this.previousUrl = null;
        router.events.pipe(
          filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
       ).subscribe((e: RouterEvent) => {
         // Do something
        //  console.log(e.url)
         this.previousUrl = this.currentUrl
         this.currentUrl = e.url
    console.log("Current URL, ", this.currentUrl)
    console.log("Previous URL, ", this.previousUrl)


       });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  } 
}
