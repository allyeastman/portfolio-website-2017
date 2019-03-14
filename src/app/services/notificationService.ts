import { Injectable } from '@angular/core';
import { ToastService } from './toastService';

@Injectable()
export class NotificationService {
    constructor(private toastService: ToastService) { }

    error(error: any, defaultMessage: string) {
        defaultMessage = defaultMessage || 'Something went wrong';
        console.error(error);
        const message = (error.json && error.json()) ? error.json().Message : defaultMessage;
        this.toastService.error(message);
    }

    success(message: string) {
        this.toastService.success(message);
    }
}
