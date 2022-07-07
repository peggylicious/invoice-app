import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../shared/interfaces/invoice';
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private http: HttpClient) { }
  getAllInvoice(){
    return this.http.get<Invoice[]>('https://invoice-api-0.herokuapp.com/invoice/all')
  }
  addInvoice(data:any){
    // data = new FormData(data)
    return this.http.post<Invoice[]>('assets/data.json', data) 
  }
}
