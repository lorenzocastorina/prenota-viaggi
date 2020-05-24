import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places;

  constructor(
    private ajaxService: AjaxService
  ) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    this.ajaxService.get('places.json').subscribe(response => {
      this.places = response;
    });
  }
}
