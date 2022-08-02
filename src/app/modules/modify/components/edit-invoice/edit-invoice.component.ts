import { Component, OnInit } from '@angular/core';
import { PreviousUrlService } from 'src/app/shared/services/previous-url.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  constructor(private previousUrlService: PreviousUrlService) { }

  ngOnInit(): void {
    // console.log(this.previousUrlService.getPreviousUrl())
  }

}
