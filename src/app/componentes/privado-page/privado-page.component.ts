import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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
  const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('http://127.0.0.1:5000', formData)
       .subscribe(res => {
        this.serverData = res as JSON;
         console.log(this.serverData);
         alert('SUCCESS !!');
       })
  // this.http.get('http://127.0.0.1:5000/').subscribe(data => {
  //     this.serverData = data as JSON;
  //     console.log(this.serverData);
  //   })
}
  ngOnInit() {
  }

}
