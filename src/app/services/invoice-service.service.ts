import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../shared/interfaces/invoice';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  invoiceUrl = "https://invoice-server-187l.onrender.com/invoice/";
  // invoiceUrl = "http://localhost:3000/invoice/";
  private invoices$ = new BehaviorSubject<Invoice[]>([]);

  constructor(private http: HttpClient) { }
  getAllInvoiceRemote(){
    this.http.get<Invoice[]>(`${this.invoiceUrl}all`).subscribe(invoices => {
      this.invoices$.next(invoices)
    })
  }
  addInvoice(data:any){
    // data = new FormData(data)
    console.log(data)
    return this.http.post<Invoice[]>(`${this.invoiceUrl}create`, data) 
  }
  editInvoice(data:any, invoiceId:any){
    console.log(data)
    return this.http.put<Invoice[]>(`${this.invoiceUrl}update/${invoiceId}`, data) 
  }
  getInvoice(invoiceId:any){
    return this.http.get<Invoice[]>(`${this.invoiceUrl}invoice/${invoiceId}`) 
  }
  public getAllInvoice(): Observable<Invoice[]>{
    return this.invoices$
  }
}
