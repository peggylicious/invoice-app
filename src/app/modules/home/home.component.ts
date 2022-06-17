import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private inv: InvoiceServiceService) { }
  buttonState = 'delete'
  buttonTitle = 'delete';
  invoices = [];
  ngOnInit(): void {
    this.inv.getAllInvoice().subscribe({
      next: (result:any)=>{
        this.invoices = result
        console.log(result)
      }, 
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
