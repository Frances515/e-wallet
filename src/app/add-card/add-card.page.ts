import { Component, OnInit } from '@angular/core';




declare let saveData;

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

    //  saveData();

    // const data = {
    //     title: 'new Card',
    //     content: 123453112,
    //     tier: 'Blue'
    // };

    /* eslint-env es6 */
/* eslint-disable no-console */

// fetch('add-card', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(da => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
    // this.card.push({
    //   title: 'hell'
    // });
    // window.alert('done');

   }

  add() {
    this.data = JSON.stringify(this.card);
    window.alert(this.data);
  }


}
