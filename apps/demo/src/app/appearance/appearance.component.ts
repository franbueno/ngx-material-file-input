import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent implements OnInit {
  formDoc: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formDoc = this._fb.group({
      fill: [],
      outline: []
    });
  }

  get fill() {
    return `<mat-form-field appearance="fill">
      <mat-label>Basic fill input</mat-label>
      <ngx-mat-file-input formControlName="fill" placeholder="Basic fill placeholder" ></ngx-mat-file-input>
      <mat-icon matSuffix>folder</mat-icon>
    </mat-form-field>`;
  }

  get outline() {
    return `<mat-form-field appearance="outline">
      <mat-label>Basic outline input</mat-label>
      <ngx-mat-file-input formControlName="outline" placeholder="Basic outline placeholder" ></ngx-mat-file-input>
      <mat-icon matSuffix>folder</mat-icon>
    </mat-form-field>`;
  }

}
