import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typologies',
  templateUrl: './typologies.component.html',
  styleUrls: ['./typologies.component.css']
})
export class TypologiesComponent implements OnInit {

  typologies = [{
    title: 'Appartamenti',
    structures: 815.440,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
  }, {
    title: 'Resort',
    structures: 22.003,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
  }, {
    title: 'Ville',
    structures: 429.015,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
  }, {
    title: 'Chalet',
    structures: 14.289,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  }, {
    title: 'Cottage',
    structures: 125.466,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg', 
  }, {
    title: 'Glamping',
    structures: 9.922,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg',
  }, {
    title: 'Residence',
    structures: 34.932,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg',
  }, {
    title: 'Case vacanze',
    structures: 429.015,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg',
  }, {
    title: 'Affittacamere',
    structures: 139.856,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg',
  }, {
    title: 'Ostelli',
    structures: 27.672,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg',
  }, {
    title: 'Motel',
    structures: 15.872,
    background: 'https://r-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg',
  }, {
    title: 'Bed & Breakfast',
    structures: 246.357,
    background: 'https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_bed_and_breakfast/a6a4a3f904284337c187771d94a4bb6169b168d7.jpg',
  }];
  

  constructor() { }

  ngOnInit() {
  }

}
