import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  get = (url:string)=>{
    return this.http.get(url);
  }

  post = (url:string, data:any)=>{
    /* let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');  */
    return this.http.post(url, data); 
  }

}
