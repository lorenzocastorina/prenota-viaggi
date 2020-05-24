import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  locations;

  constructor(
    private ajaxService: AjaxService
  ) { }

  ngOnInit() {
    this.getDestinations();
  }

  getDestinations() {
    this.ajaxService.get('destinations.json').subscribe(response => {
      this.locations = response;
    });
  }

}
