import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }
  items = []
  name:any
  ngOnInit(): void {
    console.log("hello")
    console.log(this.route.url)
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(params)
    });
  }
  getRoute(){
    
  }
}
