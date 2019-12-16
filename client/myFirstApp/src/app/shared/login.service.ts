// // import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Injectable, Inject } from '@angular/core';
// import { AppConfig, APP_CONFIG } from 'src/app-config.module';
// import {observable} from 'rxjs';
// import { map } from 'rxjs/operators';
// import { HttpClient,RequestOptions,HttpResponse,HttpRequest } from '@angular/common/http';
// // import { Http, Headers, Response } from '@angular/common/http';

// @Injectable()
// export class LoginService {
//     constructor(private http: HttpClient, private router: Router, @Inject(APP_CONFIG) private config: AppConfig) {}

// update(Json: JSON) {
//     const headers = new Headers({
//         'Content-Type': 'application/json'
//     });
//     const options = new RequestOptions({headers});
//     return this.http.post(`${this.config.url}/login`, Json,options)
//     .pipe(map((response: HttpResponse) => {
//         return response.json();
//     }));
// }

// }


import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig, APP_CONFIG } from 'src/app-config.module';

@Injectable()
export class LoginService {
  constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) { }

  update(picklistjson: any) {
    console.log(JSON.stringify(picklistjson));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.config.url}/login`, picklistjson, {headers: headers})
    .map((response: Response) => {
      let picklistjson = response.json();
      if (picklistjson) {
        // localStorage.setItem('currentUser', JSON.stringify(user));
      }
      console.log(picklistjson);
      return picklistjson;
    });
  }
}