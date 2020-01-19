import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit, OnChanges {

  protected defaultQuestion = 'mother';
  private myFormGroup: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      gender: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmail], this.forbiddenEmailAsync),
      securityData: new FormGroup({
        securityQuestion: new FormControl(this.defaultQuestion),
        securityAnswer: new FormControl(null),
      }),
      education: new FormArray([new FormControl(null, Validators.required)])
    });

    this.myFormGroup.setValue({
      gender: 'male',
      email: 'test@gmail.com',
      securityData: {
        securityQuestion: 'mother',
        securityAnswer: 'natasha',
      },
      education: ['BS']
    });

    this.myFormGroup.valueChanges.subscribe(value => console.log(value));
    this.myFormGroup.statusChanges.subscribe(value => console.log(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  forbiddenEmail(formControl: FormControl): ValidationErrors | null {
    if (formControl.value === 'admin@gmail.com') {
      return {
        invalidEmailAdmin: true
      };
    }

    return null;
  }

  forbiddenEmailAsync(formControl: FormControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value === 'admin1@gmail.com') {
          resolve({
            invalidEmailAdmin1: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myFormGroup);
    this.myFormGroup.reset();
  }

  addEduction() {
    const control = new FormControl(null, Validators.required);
    (this.myFormGroup.get('education') as FormArray).push(control);
  }
}
