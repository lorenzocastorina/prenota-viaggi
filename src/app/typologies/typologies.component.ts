import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-typologies',
  templateUrl: './typologies.component.html',
  styleUrls: ['./typologies.component.css']
})
export class TypologiesComponent implements OnInit {

  typologies;

  constructor(
    private ajaxService: AjaxService
  ) { }

  ngOnInit() {
    this.getTypologies();
  }

  getTypologies() {
    this.ajaxService.get('typologies.json').subscribe(response => {
      this.typologies = response;
    });
  }

}
