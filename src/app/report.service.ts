import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(public _http : HttpClient) {
           
  }
   getReport(){ 
	   return this._http.get('/api').toPromise();
	   
   }
   
   
}
