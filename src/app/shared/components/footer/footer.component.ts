import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }
  items = [];
  name:any;
  isRouteLink:any;
  isViewInvoiceRouteLink:boolean = false;
  isEditRouteLink:boolean = false;
  @Input() buttonTitle = "";
  @Input() buttonState = "";
  @Input() invoiceId = "";
  @Output() onCreateInvoice = new EventEmitter()
  @Output() onEditInvoice = new EventEmitter()

  ngOnInit(): void {
    this.isRouteLink = this.route.url;
    this.isEditRouteLink = this.isRouteLink.includes("edit")
    this.isViewInvoiceRouteLink = this.isRouteLink.includes('view-invoice')
    console.log(this.isRouteLink)
    console.log(this.route.url)
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(params)
    });
  }
  getVal(){
  //  return this.isRouteLink === 'modify/create' ? true
  }
  createInvoice(){
    this.onCreateInvoice.emit("Hello")
  }
  editInvoice(){
    this.onEditInvoice.emit("Hello")
  }
}
