import { Injectable } from '@angular/core';

declare var Materialize: any;

@Injectable()
export class ToastService {

    constructor() { }

    error(text: string, duration: number = 3000, style: string = 'red') {
        Materialize.toast(text, duration, style);
    }

    success(text: string, duration: number = 3000, style: string = 'green') {
        Materialize.toast(text, duration, style);
    }
}
