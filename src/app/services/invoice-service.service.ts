import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../shared/interfaces/invoice';
@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private http: HttpClient) { }
  getAllInvoice(){
    return this.http.get<Invoice[]>('assets/data.json')
  
  }
}
