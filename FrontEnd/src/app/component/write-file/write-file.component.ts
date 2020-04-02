import { ReadWriteService } from './../../service/read-write.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-write-file',
  templateUrl: './write-file.component.html',
  styleUrls: ['./write-file.component.scss']
})
export class WriteFileComponent implements OnInit {

  private subscriptionData: Subscription;
  dataFromFile;
  data:string;

  constructor(private readWriteService: ReadWriteService) { }

  ngOnInit(): void {
  }

  addDataToFile(fileValue:string) {
    this.data = fileValue;
    this.subscriptionData = this.readWriteService.writeDataToFile(this.data).subscribe((response) => {
      console.log('response===== ',response);
      this.dataFromFile = response;
      if(response) {
        alert(response.fileData.content);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
