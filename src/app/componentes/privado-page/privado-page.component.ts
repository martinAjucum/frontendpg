import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { PrediccionService } from '../../servicios/prediccion.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  serverData: JSON;
  constructor(private http: HttpClient, 
    public predict: PrediccionService) { }
    fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
  
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
  
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }

  onSubmit() {
  this.predict.sendimage(this.fileData);
  //alert('SUCCESS !!');
  }
  ngOnInit() {
  }

}
