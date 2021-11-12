import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {  //On the video, this was changed to CurrencyExchangeRatesService

  constructor(private http: HttpClient ) { }

  getRates(base: string): Observable<ExchangeRatesResponse>{
    //return this.http.get<ExchangeRatesResponse>('https://api.exchangeratesapi.io/latest?base=${base}');  //using this asks for an API access key - meaning i have to sign-up an account
    return this.http.get<ExchangeRatesResponse>('http://api.exchangeratesapi.io/v1/latest?access_key=5792b7495e687c132cf9c0e884e9e027');
    //my subscription to exchangerateAPI limits to EUR - It wont let me choose different currency as base
    //example: 
    //http://api.exchangeratesapi.io/v1/latest?access_key=5792b7495e687c132cf9c0e884e9e027&base=CAD
    //http://api.exchangeratesapi.io/v1/latest?access_key=5792b7495e687c132cf9c0e884e9e027&base=EUR
    
  }
}