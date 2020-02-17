import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  locations = [{
    title: 'Fiumicino',
    structures: 242,
    price: 64.75,
    background: 'https://r-cf.bstatic.com/xdata/images/city/540x270/640063.webp?k=47641c227e17c92944b7952c42c6d4dbda99e66159c32e63e2019be60768a669&o=',
  }, {
    title: 'Praga',
    structures: 5065,
    price: 100.56,
    background: 'https://q-cf.bstatic.com/xdata/images/city/540x270/653169.webp?k=52221e7299455127fa8ef6730e2399b0c683e8cc4a6ea84ebeecd95d4bac024d&o=',
  }, {
    title: 'Parma',
    structures: 323,
    price: 32.75,
    background: 'https://q-cf.bstatic.com/xdata/images/city/540x270/641222.webp?k=2ab76ca89e07ad9fff0babbb9a0f3cf4bbd4f99d28e6d529dfd9717db4461b5a&o=',
  }, {
    title: 'Trieste',
    structures: 704,
    price: 54.34,
    background: 'https://r-cf.bstatic.com/xdata/images/city/540x270/972753.webp?k=336b155f3a3bb55e5a39da2558e6bf634a42f16c494d6feb1e997d9d237c65c2&o=',
  }, {
    title: 'Torino',
    structures: 1901,
    price: 89.10,
    background: 'https://q-cf.bstatic.com/xdata/images/city/540x270/643434.webp?k=9822a38cc106f464ad76bc06f06e2399d0fb5b4074c336f5e705658b34c93153&o=',
  }];

  constructor() { }

  ngOnInit() {
  }

}
