import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  @ViewChild('f', {static: true} )
  private form: NgForm;

  protected defaultQuestion = 'mother';

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.form);
  }
}
