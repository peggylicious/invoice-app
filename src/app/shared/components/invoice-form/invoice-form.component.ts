import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { Invoice } from '../../interfaces/invoice';
@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceId: any;
  invoice: Invoice = {};
  invoiceDetails = this.fb.group({
    clientAddress: this.fb.group({
      city: [''],
      street: ['Taimaka street'],
      country: [''],
      postCode: [''],
    }),
    id: [''],
    client_email: ['test@client.com'],
    client_name: [''],
    created_at: [''],
    description: [''],
    items: this.fb.array([
      // this.fb.group({
      //   name: ['Hello'],
      //   price: [''],
      //   quantity: [''], 
      //   total: ['']
      // })
    ]),
    payment_due: [''],
    payment_terms: [''],
    senderAddress: this.fb.group({
      city: [''],
      street: ['romanias'],
      country: [],
      postCode: [''],
    }),
    status: [''],
    total: [''],
  });
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private invoiceService: InvoiceServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.invoiceId = param['id'];
      // console.log(param['id'])
    });
    this.invoiceService.getAllInvoice().subscribe({
      next: (res) => {
        // console.log(res)
        res.filter((item) => {
          if (item['invoice_id'] === this.invoiceId) {
            console.log(item);
            this.invoice = item;
            this.initializeForm(this.invoice);
          }
        });
      },
    });
  }
  initializeForm(selectedInvoice: Invoice) {
    console.log('hI', selectedInvoice);
    this.createItem()

    this.invoiceDetails.patchValue({
      clientAddress: {
        city: selectedInvoice?.['clientAddress']?.city,
        street: selectedInvoice?.['clientAddress']?.street,
        country: selectedInvoice?.['clientAddress']?.country,
        postCode: selectedInvoice?.['clientAddress']?.postCode,
      },
      id: '',
      client_email: selectedInvoice?.['client_email'],
      client_name: selectedInvoice?.['client_name'],
      created_at: selectedInvoice?.['created_at'],
      description: '',
      items: selectedInvoice['items'],
      payment_due: selectedInvoice?.['payment_due'],
      payment_terms: '',
      senderAddress: {
        city: selectedInvoice?.['senderAddress']?.city,
        street: selectedInvoice?.['senderAddress']?.street,
        country: selectedInvoice?.['senderAddress']?.country,
        postCode: selectedInvoice?.['senderAddress']?.postCode,
      },
      status: selectedInvoice?.['status'],
      total: selectedInvoice?.['total'],
    });
    console.log(this.invoiceDetails.value);
  }
  get items() {
    // console.log(this.invoiceDetails.get("items"))
    let arr = this.invoiceDetails.get("items") as FormArray
    // console.log(arr)
    return arr
  }
  createItem(){
    this.invoice['items'].forEach((element: any) => {
      this.addItem()
    })
    console.log(this.items)
  }
  addItem(){
    return this.items.push(this.fb.group({
      name: [''],
      quantity: [''], 
      price: [''],
      total:['']
    }))
  }
  postInvoice(){
    console.log(this.invoiceDetails.value.items)
    // this.invoiceDetails.value.items
    this.invoiceService.addInvoice(this.invoiceDetails.value).subscribe({
      next: (result)=>{
        console.log(result)
      }
    })
  }
}
