import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { PreviousUrlService } from 'src/app/shared/services/previous-url.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private inv: InvoiceServiceService, private sharedservice: SharedService, private route: ActivatedRoute, private router: Router, private previousUrlService: PreviousUrlService) { }
  buttonState = 'delete'
  buttonTitle = 'delete';
  invoices$!: Observable<any>
  statusArray = ['paid', 'pending']
  selecteStatus:any;
  allInvoices$!: Observable<any>
  allInvoices: Invoice[] = [];
  ngOnInit(): void {
    this.inv.getAllInvoiceRemote()
    this.inv.getAllInvoice().subscribe({
      next: (result:any)=>{
        this.allInvoices = result
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
  filterByStatus(str:any){
    console.log(str)
    let u:any[] =[]
    let newarr = this.inv.getAllInvoice().subscribe(x=> {
      u = x
      if (str){
        this.allInvoices = u.filter(item=>item.status === str)
      }else{
        this.allInvoices = x
      }
    })
    
  }
//   ngOnDestroy() {
//     this.previousUrlService.getPreviousUrl()
// }
}
