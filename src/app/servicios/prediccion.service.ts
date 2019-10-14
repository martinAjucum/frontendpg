import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class PrediccionService {
  baseUrl:string = "http://127.0.0.1:5000/";
  constructor(private httpClient : HttpClient) { }

  public imgpred(obj){
  
}

}
