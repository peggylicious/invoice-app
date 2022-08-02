import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PreviousUrlService } from '../../services/previous-url.service';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.css']
})
export class GoBackButtonComponent implements OnInit {

  constructor(private previousUrlService: PreviousUrlService, private route: Router) { }
  @Output() goToPrevPage = new EventEmitter();
  ngOnInit(): void {
    console.log(this.previousUrlService.getPreviousUrl())
  }
  goToPreviousPage(){
    this.route.navigateByUrl(this.previousUrlService.getPreviousUrl())
    console.log("Baba")
    // this.goToPrevPage.emit(this.previousUrlService.getPreviousUrl())
  }
}
