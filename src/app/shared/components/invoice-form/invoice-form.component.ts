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
    created_by: [localStorage.getItem('userId')],
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
  errorObj: {[key:string]: boolean} = {clientAddress: false, client_name: false, client_email: false}
  receivedError: {[key:string]: any} = {}
  @Input() pageTitle:any = ""

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
      created_by: localStorage.getItem('userId'),
      description: selectedInvoice?.['description'],
      items: selectedInvoice['items'],
      payment_due: selectedInvoice?.['payment_due'],
      payment_terms: selectedInvoice?.['payment_terms'],
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
  createInvoice(){
    console.log(this.invoiceDetails.value.items)
    // this.invoiceDetails.value.items
    this.invoiceService.addInvoice(this.invoiceDetails.value).subscribe({
      next: (result)=>{
        console.log(result)
      },
      error: (err:{error:[{[key: string]: any;}]}) => {
        this.receivedError = {}
        err.error.forEach(element => {
          this.errorObj[element["param"]] = false //Reset
          if(element["param"].includes('.')){ // Simply checks if request parameter is an object
            let address;
            console.log(this.receivedError[element["param"].split('.')[0]])
            console.log("Add ", address)
            // if(typeof this.receivedError[element["param"].split('.')[0]] === "undefined"){
              if(element["param"].split('.')[0]  in this.receivedError && Object.keys(this.receivedError[element["param"].split('.')[0]].length !== 0)){
              // console.log("Not def")
              // address = element["param"].split('.')[0]
              // this.receivedError[address] = {}
              // this.receivedError[address][element["param"].split('.')[1]] = element
              this.receivedError[element["param"].split('.')[0]][element["param"].split('.')[1]] = element
            }else{
              console.log("Not def")
              address = element["param"].split('.')[0]
              this.receivedError[address] = {}
              this.receivedError[element["param"].split('.')[0]][element["param"].split('.')[1]] = element

            }
            // element["param"].split('.')[1] = {}
              // this.receivedError[element["param"].split('.')[0]][element["param"].split('.')[1]] = element

            // }
            this.errorObj[element["param"]] = true
          }
          if(this.invoiceDetails.value.hasOwnProperty(element["param"])){ // this.invoiceDetails.value is an object. Helps you eaisly fetch all object properties
            this.receivedError[element["param"]] = element
            this.errorObj[element["param"]] = true
          }
        });
        console.log(this.receivedError)

      }
    })
  }
}
