import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { InvoiceModalComponent } from '../invoice-modal/invoice-modal.component';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private invoiceService: InvoiceServiceService, private dialog: MatDialog) { }
  items = [];
  name:any;
  isRouteLink:any;
  isViewInvoiceRouteLink:boolean = false;
  isEditRouteLink:boolean = false;
  openModal: boolean = false;
  @Input() buttonTitle = "";
  @Input() buttonState = "";
  @Input() invoiceId = "";
  @Output() onCreateInvoice = new EventEmitter()
  @Output() onEditInvoice = new EventEmitter()
  @Output() onUpdateStatus = new EventEmitter()

  ngOnInit(): void {
    this.isRouteLink = this.route.url;
    this.isEditRouteLink = this.isRouteLink.includes("edit")
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
  createInvoice(){
    this.onCreateInvoice.emit("Hello")
  }
  editInvoice(){
    this.onEditInvoice.emit("Hello")
  }
  openInvoiceForm(x?:any){
    // if(x === 'edit'){
      this.route.navigateByUrl(`/modify/edit/${this.invoiceId}`, {state: {formType: 'edit', invoiceId: ''}})
    // }
    // if x === PatternValidator, update invoice
    // if (x === 'paid'){

    // }
  }
  markAsPaid(){
    this.openDialog('paid')
  }
  openDialog(name: any) {
    let modalData = {}
    if(name === 'paid'){
      modalData = {
        title: 'Mark Invoice as Paid',
        description: "Are you sure you want to mark invoice as paid?"
      };
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };
    dialogConfig.data = modalData
    const dialogRef = this.dialog.open(InvoiceModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data, name)
        this.invoiceService.editInvoice({'status': name}, this.invoiceId).subscribe(x=>{
          this.onUpdateStatus.emit(name)
        })
      }  
    );  
  }
}
