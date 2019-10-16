import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { PrediccionService } from '../../servicios/prediccion.service';
import { SharedServiceService } from '../../servicios/shared-service.service';

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
  showVar: boolean = false;
  dataSource: Object;

  constructor( public predict: PrediccionService,
    public sharedService: SharedServiceService) {
      this.dataSource = {
        "chart": {
          "caption": "Resultados",
          "subCaption": "Deteccion de neumonia con Deep Learning",
          "xAxisName": "Estado",
          "yAxisName": "Probabilidad",
          "numberSuffix": "%",
          "theme": "fusion",
        },
        "data": [{
          "label": "NORMAL",
          "value": "0"
        }, {
          "label": "PNEUMONIA",
          "value": "0"
        }]
      };
     }
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
  this.predict.sendimage(this.fileData)
  .subscribe(res => {
      let serverData = res as JSON;
      this.sharedService.setData(serverData);
      console.log(this.sharedService.getData());
     })
  //alert('SUCCESS !!');
  this.showVar = !this.showVar;
  }

  
  ngOnInit() {
  }

}
