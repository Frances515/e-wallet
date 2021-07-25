import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit  {
  constructor(private router: Router) { }

  ngOnInit() {
    // this.transactions();
    // this.myCards();
  }


  // deposits() {
  //   const transact = document.getElementById('trans_details');
  //   const depo = document.getElementById('deposit_details');
  //   const wthdraw = document.getElementById('withdraw_details');

  //   transact.style.visibility = 'hidden';
  //   wthdraw.style.visibility = 'hidden';
  //   depo.style.visibility = 'visible';


  // }

  // transactions() {
  //   const transact = document.getElementById('trans_details');
  //   const depo = document.getElementById('deposit_details');
  //   const wthdraw = document.getElementById('withdraw_details');

  //   depo.style.visibility = 'hidden';
  //   wthdraw.style.visibility = 'hidden';
  //   transact.style.visibility = 'visible';
  // }

  // withdraw() {
  //   const transact = document.getElementById('trans_details');
  //   const depo = document.getElementById('deposit_details');
  //   const wthdraw = document.getElementById('withdraw_details');

  //   transact.style.visibility = 'hidden';
  //   depo.style.visibility = 'hidden';
  //   wthdraw.style.visibility = 'visible';
  // }

//   myCards() {
//     const myCards = document.getElementById('my_cards');
//     const transact = document.getElementById('trans_details');
//     const cardDetail = document.getElementById('card_analytics');

//     myCards.style.visibility = 'visible';
//     transact.style.visibility = 'visible';
//     cardDetail.style.visibility = 'hidden';

//   }

//   cardAnalytics() {
//     const myCards = document.getElementById('my_cards');
//     const transact = document.getElementById('trans_details');
//     const cardDetail = document.getElementById('card_analytics');
//     const depo = document.getElementById('deposit_details');
//     const wthdraw = document.getElementById('withdraw_details');

//     myCards.style.visibility = 'hidden';
//     transact.style.visibility = 'hidden';
//     cardDetail.style.visibility = 'visible';
//     depo.style.visibility = 'hidden';
//     wthdraw.style.visibility = 'hidden';
  //   }
}
