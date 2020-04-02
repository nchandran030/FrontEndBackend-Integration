import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, JsonpModule } from '@angular/http';

import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadWriteService {

  baseUrlString: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  readDataFromFile() {
    return this.http.get(this.baseUrlString +
      '/api/readingFile').
      pipe(map((res: Response) => res.json()),
        catchError(<T>(error: any, result?: T) => {
          return of(result as T);
        })
      );
  }

  writeDataToFile(data) {
    return this.http.get(this.baseUrlString +
      '/api/writingFile/'+data).
      pipe(map((res: Response) => res.json()),
        catchError(<T>(error: any, result?: T) => {
          return of(result as T);
        })
      );
    // return this.http.post(this.baseUrlString + '/api/writingFile', data).
    //   pipe(map((res: Response) => res.json()),
    //     catchError(<T>(error: any, result?: T) => {
    //       return of(result as T);
    //     })
    //   );
  }
}
