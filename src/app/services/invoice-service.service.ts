import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../shared/interfaces/invoice';
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  invoiceUrl = "https://invoice-api-0.herokuapp.com/invoice/"
  constructor(private http: HttpClient) { }
  getAllInvoice(){
    return this.http.get<Invoice[]>(`${this.invoiceUrl}all`)
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
}
