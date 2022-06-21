import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  displayInvoice(id: string){
    console.log(id)
  }
}
