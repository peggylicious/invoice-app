import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }
  invoiceId: any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this. invoiceId = param['id']
      // console.log(param['id'])
    });
  }

}
