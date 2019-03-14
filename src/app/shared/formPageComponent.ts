import { ValidationResult } from '../models/validationResult';
import { FormControl, FormGroup } from '@angular/forms';

export class FormPage {
    submitted = false;
    saving = false;
    error = '';

    onSubmit(form: FormGroup) {
        this.submitted = true;

        if (!form.valid) {
            form.markAsDirty(true);
            return;
        }

        this.performSubmit();
    }

    performSubmit() {
    }

    applyValidationClass(input: FormControl, customValidatintResult?: ValidationResult): any {
        return {
            'has-error': (input.dirty || this.submitted) && (customValidatintResult ? !(customValidatintResult.valid) : !input.valid),
            'has-success': (input.dirty || this.submitted) && (customValidatintResult ? customValidatintResult.valid : input.valid)
        };
    }

    showErrorMessage(input: FormControl, customValidatintResult?: ValidationResult): boolean {
        const showError = input.pristine || !this.submitted || (customValidatintResult ? customValidatintResult.valid : input.valid);
        return showError;
    }

    applyValidationClassTwoControls(input: FormControl, anotherControl: FormControl): any {
        return {
            'has-error': (input.dirty || this.submitted) && input.value !== anotherControl.value,
            'has-success': (input.dirty || this.submitted) && input.value === anotherControl.value
        };
    }

    showErrorMessageTwoControls(input: FormControl, anotherControl: FormControl): boolean {
        const showError = input.pristine || !this.submitted || input.value === anotherControl.value;
        return showError;
    }

    emailFormatValid(email: string, invalid?: boolean): ValidationResult {
        if (invalid) {
            return new ValidationResult(false, 'Email has already been registered. Try different one');
        }

        // tslint:disable-next-line:max-line-length
        if (email && email.trim() && !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return new ValidationResult(false, 'Email must have valid format');
        }

        return new ValidationResult(true, '');
    }

}
