import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.css']
})
export class FooterButtonComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  @Input() buttonTitle = "";
  @Input() buttonState = "";
  @Input() invoiceId = '';
  
  ngOnInit(): void {
  }
  openInvoiceForm(x:any){
    if(x === 'edit'){
      this.route.navigateByUrl(`/modify/edit/${this.invoiceId}`, {state: {formType: 'edit', invoiceId: ''}})
    }
    // if x === PatternValidator, update invoice
    if (x === 'paid'){

    }
    console.log(x)
  }
}
