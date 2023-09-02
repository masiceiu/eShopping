import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class MyMainService {

  constructor(private http: HttpClient) { }

  getProducts() { 
    return this.http.get('../assets/data/products.json').pipe(map(res => res)); 
  }
}