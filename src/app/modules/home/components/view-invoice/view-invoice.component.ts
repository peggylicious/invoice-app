import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { PreviousUrlService } from 'src/app/shared/services/previous-url.service';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private invoiceservice: InvoiceServiceService, private previousUrlService: PreviousUrlService) { }
  id: string = "";
  invoice:Invoice = {};
  status: string = ''
  ngOnInit(): void {
    // console.log(this.previousUrlService.getPreviousUrl())
    // Check if invoice is present
    // 1. populate when you click on invoice
    // 2. you save to local storage
    this.getInvoiceDetails()
    // if(this.invoice.hasOwnProperty('invoice_id')){
    //   // this.getInvoiceDetails()
      
    // // }else{
    //   let persistedInvoiceId = localStorage.getItem('invoice_id')
    //   console.log(persistedInvoiceId)
    //   this.invoiceservice.getInvoice(persistedInvoiceId).subscribe((res)=>{
    //     console.log(res)
    //     this.invoice = res
    //   })
    // }
    
  }
  getInvoiceDetails(){
    this.route.params.subscribe({
      next: (param)=>{
        this.id = param['id']
        localStorage.setItem('invoice_id', this.id)
        // console.log(this.id)
        this.invoiceservice.getAllInvoice().subscribe({
          next: (res)=>{
            console.log(res)
            if(res.length === 0){
              this.invoiceservice.getInvoice(this.id).subscribe((res)=>{
                console.log(res)
                this.invoice = res
              })
            }
            res.filter(item => {
              if(item['invoice_id'] === this.id){
                console.log(item)
                this.invoice = item
              }
            })
          }
        })
      }
    })
  }
  updateStatus(event:any){
    console.log("On emit")
    return this.status = event
  }
}
