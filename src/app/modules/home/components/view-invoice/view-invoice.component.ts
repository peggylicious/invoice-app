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
    this.getInvoiceDetails()
  }
  getInvoiceDetails(){
    this.route.params.subscribe({
      next: (param)=>{
        this.id = param['id']
        // console.log(this.id)
        this.invoiceservice.getAllInvoice().subscribe({
          next: (res)=>{
            // console.log(res)
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
