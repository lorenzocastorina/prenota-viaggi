import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'http://demo0841459.mockable.io/';

  test() {
    console.log('Ajax service importato correttamente');
  }

  get(path) {
    return this.http.get(this.baseUrl + path);
  }
}
