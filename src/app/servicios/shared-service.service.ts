import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  datapredict: any;
  constructor() {
    this.datapredict = {};
  }
  setData(val: object){
    this.datapredict = val;
  }
  getData(){
    return this.datapredict;
  }
}
