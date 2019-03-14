import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FormService {
    constructor(private http: Http) { }

    postEmail(name: String, email: String, message: String): Observable<string> {

        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'

        });
        const options = new RequestOptions({ headers: headers });

        const url = 'http://formspree.io/ae21196@gmail.com';
        const data = `name=${name}&email=${email}&message=${message}`;

        return this.http.post(url, data, options)
            .map(response => {
                return response;
            })
            .catch(this.handleError);
    }

    private handleError(err) {
        if (err.status === 500) {
            console.log('an error occured');
        } else if (err.status === 588) {
            console.log('an error occured');
        }

        return Observable.throw(err.statusText);
    }
}
