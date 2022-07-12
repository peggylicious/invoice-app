import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  @Output() onCreateInvoice = new EventEmitter()

  ngOnInit(): void {
  }
  creatingInvoice(){
    console.log("From create component")
    this.onCreateInvoice.emit("From create component")
  }
}
