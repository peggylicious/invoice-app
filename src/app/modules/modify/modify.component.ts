import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  items = []
  name:any
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // console.log("hello")
    // console.log(this.route.url)
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(params)
    // });
  }
  creatingInvoice(){
    
  }
}
