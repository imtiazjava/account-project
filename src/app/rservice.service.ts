import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RserviceService {
  url:string="http://localhost:9001/mapi/msave";

  constructor( private http:HttpClient) { }
storeData(cust:any){
  console.log(cust);
  //const header1=new HttpHeaders();
  //header1.append('Content-Type','application/json;charset=UTF-8');
  //return this.http.post(this.url,JSON.stringify(cust),{headers:header1});
  return this.http.post(this.url,cust,{responseType:'text'});  
}
}
