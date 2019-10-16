import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SharedServiceService } from '../servicios/shared-service.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrediccionService {
  baseUrl:string = "http://127.0.0.1:5000/";
  constructor(private http : HttpClient, private sharedService: SharedServiceService) { }

  
sendimage(fileData: File):Observable<any>{ 
  const formData = new FormData();
  formData.append('file', fileData);
  
   return this.http.post(this.baseUrl, formData)
      //  .subscribe(res => {
      //   let serverData = res as JSON;
      //   this.sharedService.setData(serverData);
      //   console.log(serverData );
      //  })
  
}


}
