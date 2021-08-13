import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ParamService } from './../param.service';


let transaction: any;
let deposit: any;
let withdraw: any;
let myCard: any;
let myAnalytics: any;
@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.page.html',
  styleUrls: ['./travel-details.page.scss'],
})
export class TravelDetailsPage implements OnInit {
  data: any;
  bank: any;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private paramService: ParamService) {
      this.data = this.paramService.getParam();
     }

  ngOnInit() {
    this.showCard();
  }

  active(v) {
    v.style.visibility = 'visible';
  }

  inactive(v){
    v.style.visibility = 'hidden';
  }

  showCard(){
    myCard = document.getElementById('my_card_section');
    myAnalytics = document.getElementById('card_analytics_section');

    this.active(myCard);
    this.inactive(myAnalytics);
    this.trans();
  }

  showAnalytics() {
    myCard = document.getElementById('my_card_section');
    myAnalytics = document.getElementById('card_analytics_section');

    this.inactive(myCard);
    this.active(myAnalytics);
    this.inactive(transaction);
    this.inactive(deposit);
    this.inactive(withdraw);
  }


  trans() {
    transaction = document.getElementById('trans_details');
    deposit = document.getElementById('depo_details');
    withdraw = document.getElementById('withdraw_details');

    this.active(transaction);
    this.inactive(deposit);
    this.inactive(withdraw);
  }

  depo() {
    this.active(deposit);
    this.inactive(transaction);
    this.inactive(withdraw);
  }

  withdraw() {
    this.active(withdraw);
    this.inactive(transaction);
    this.inactive(deposit);
  }


}
