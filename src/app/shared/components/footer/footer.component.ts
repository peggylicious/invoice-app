import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  @Input() buttonTitle = "";
  @Input() buttonState = "";
  ngOnInit(): void {
    this.isRouteLink = this.route.url;
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
}
