import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.css']
})
export class HorizontalFormComponent implements OnInit {
  public basicForm: FormGroup;
  public addressForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
