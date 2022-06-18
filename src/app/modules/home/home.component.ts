import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Invoice } from 'src/app/shared/interfaces/invoice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private inv: InvoiceServiceService, private sharedservice: SharedService, private route: ActivatedRoute, private router: Router) { }
  buttonState = 'delete'
  buttonTitle = 'delete';
  invoices: Invoice[] = []
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
  openInvoice(id:any){
    // this.sharedservice.displayInvoice(id)
    // Check if id exists in array of objects
    // let name = this.invoices.filter(invoice => {
    //   if(invoice.id === id) {
    //     console.log(invoice)
        this.router.navigateByUrl(`/view-invoice/${id}`)
        this.route.params.subscribe(param => {
          console.log(param)
      })
    //   }
      
    // })
   
  }
}
