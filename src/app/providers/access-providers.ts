import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Router } from '@angular/router';

@Injectable()
export class AccessProviders {
    server : string = 'http://localhost/Api_pendakian';

    constructor(
        public http: HttpClient
    ){ }

    postData(body, file){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charser=UTF-8'
        });
        let options = {
            headers : headers
        }

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .timeout(59000)
        .map(res => res);

    }
}