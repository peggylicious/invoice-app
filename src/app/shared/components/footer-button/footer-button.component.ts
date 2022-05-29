import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.css']
})
export class FooterButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonTitle = "";
  @Input() buttonState = "";

  
  ngOnInit(): void {
  }

}
