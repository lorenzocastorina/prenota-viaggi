import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      where: new FormControl(),
      when: new FormControl(),
      howMany: new FormControl()
    });
  }

  submit() {
    console.log(this.form.value);
  }

}
