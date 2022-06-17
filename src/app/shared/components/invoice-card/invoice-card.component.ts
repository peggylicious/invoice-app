import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  constructor() { }
  @Input() invoice: {} | undefined|any;
  paymentDue:any;
  ngOnInit(): void {
    this.changePaymentDue()
  }
  changePaymentDue(){
    
    this.paymentDue = new Date(this.invoice?.paymentDue)
    console.log(this.paymentDue)
    return this.paymentDue
  }

  // public get newDate(){
  //   return new Date(this.invoice.paymentDue)
  // }

}
