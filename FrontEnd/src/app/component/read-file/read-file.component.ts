import { ReadWriteService } from './../../service/read-write.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.scss']
})
export class ReadFileComponent implements OnInit {

  private subscriptionData: Subscription;
  dataFromFile;
  
  constructor(private readWriteService: ReadWriteService) { }

  ngOnInit(): void {
    this.readFileData();
  }

  readFileData() {
    this.subscriptionData = this.readWriteService.readDataFromFile().subscribe((response) => {
      console.log('response===== ',response.fileData.content);
      this.dataFromFile = response.fileData.content;
    }, (error) => {
      console.log(error);
    });
  }

}
