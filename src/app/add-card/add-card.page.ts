import { Component, OnInit } from '@angular/core';




// declare let hello;

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  card: any;
  data: any;



  constructor() { }

  ngOnInit() {
    this.readJson();
  }

  readJson() {
    fetch('./assets/data/addCard.json').then(res =>
      res.json()).then(json => {
      this.card = json;
    });
  }



   push() {
  }

  add() {
    this.data = JSON.stringify(this.card);
    window.alert(this.data);
  }



}
