
import { Component, OnInit } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  travel: any;
  shop: any;
  bank: any;

  constructor(private router: Router,
              public alertController: AlertController,
    public actionSheetController: ActionSheetController) { }

    ngOnInit() {
      this.travelJson();
      this.shopJson();
      this.showBanking();
      this.expand();
    }

  // Show Category Functions
  showBanking() {
    this.bankJson();
    const travel = document.getElementById('travel-container');
    const shopping = document.getElementById('shopping-container');
    const banking = document.getElementById('banking-container');
    const others = document.getElementById('others-container');

    banking.style.visibility = 'visible';
    shopping.style.visibility = 'hidden';
    travel.style.visibility = 'hidden';
    others.style.visibility = 'hidden';
  }

  showShopping() {
    const travel = document.getElementById('travel-container');
    const shopping = document.getElementById('shopping-container');
    const banking = document.getElementById('banking-container');
    const others = document.getElementById('others-container');

    shopping.style.visibility = 'visible';
    travel.style.visibility = 'hidden';
    banking.style.visibility = 'hidden';
    others.style.visibility = 'hidden';
  }

  showTravel() {
    const travel = document.getElementById('travel-container');
    const shopping = document.getElementById('shopping-container');
    const banking = document.getElementById('banking-container');
    const others = document.getElementById('others-container');

    travel.style.visibility = 'visible';
    shopping.style.visibility = 'hidden';
    banking.style.visibility = 'hidden';
    others.style.visibility = 'hidden';
  }

  showOthers() {
    const travel = document.getElementById('travel-container');
    const shopping = document.getElementById('shopping-container');
    const banking = document.getElementById('banking-container');
    const others = document.getElementById('others-container');

    others.style.visibility = 'visible';
    shopping.style.visibility = 'hidden';
    banking.style.visibility = 'hidden';
    travel.style.visibility = 'hidden';
  }


// Category Templates
  async travelActionSheet(idx) {
    const actionSheet = await this.actionSheetController.create({
      header: this.travel[idx].title,
      cssClass: 'action-sheet-cards',
      buttons: [{
        text: 'View Card Number',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'View History',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'View Miles',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Remove',
        cssClass: 'remove',
        handler: () => {
          this.deleteCard(idx);

        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async bankActionSheet(idx) {
    const actionSheet = await this.actionSheetController.create({
      header: this.bank[idx].title,
      cssClass: 'action-sheet-cards',
      buttons: [{
        text: 'View Transactions',
        handler: () => {
          this.router.navigateByUrl('/details');
        }
      },{
        text: 'View Card Number',
        handler: () => {
          this.displayCardNumber(idx);
        }
      },{
        text: 'View CVV',
        handler: () => {
        }
      },{
        text: 'Send Money',
        handler: () => {
        }
      },{
        text: 'Remove',
        cssClass: 'remove',
        handler: () => {
          this.deleteCard(idx);
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async shoppingActionSheet(idx) {
    const actionSheet = await this.actionSheetController.create({
      header: this.shop[idx].title,
      cssClass: 'action-sheet-cards',
      buttons: [{
        text: 'View Card Number',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Remove',
        cssClass: 'remove',
        handler: () => {
          this.deleteCard(idx);
        }
      }]
    });
    await actionSheet.present();
  }


// Delete Functions
 async deleteCard(param) {
    const alert = await this.alertController.create({
      cssClass: 'alert_popup',
      header: 'Delete Card?',
      message: 'Are you sure you want to delete this card?',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Delete',
          cssClass: 'delete',
          handler: () => {
            this.delete(param);
            window.alert('Directory exists');
          }
        }
      ]
    });
    await alert.present();
  }

  delete(param) {
    this.travel[param].status = false;
  }


// JSON Files
  travelJson() {
    fetch('./assets/data/travelCards.json').then(res =>
      res.json()).then(json => {
      this.travel = json;
    });
  }

  shopJson() {
    fetch('./assets/data/shoppingCards.json').then(res =>
      res.json()).then(json => {
      this.shop = json;
    });
  }

  bankJson() {
    fetch('./assets/data/bankCards.json').then(res =>
      res.json()).then(json => {
      this.bank = json;
    });
  }


// Search Function
  search() {
  }


// Select Function
  select(idx, cdType) {
    if (cdType === 'travel') {
      this.travelActionSheet(idx);
    }
    if (cdType === 'shopping') {
      this.shoppingActionSheet(idx);
    }
    if (cdType === 'banking') {
      this.bankActionSheet(idx);
    }
  }

// Close Search Bar Function
  close() {
    const searchBar = document.getElementById('search-bar');
    const searchActive = document.getElementById('search-active');
    const closeSearch = document.getElementById('close-search');

    searchBar.style.visibility = 'hidden';
    searchActive.style.visibility = 'visible';
    closeSearch.style.visibility = 'visible';
  }


// Expand Search Bar Function
  expand() {
    const searchBar = document.getElementById('search-bar');
    const closeSearch = document.getElementById('close-search');
    const searchActive = document.getElementById('search-active');

    searchBar.style.visibility = 'visible';
    searchActive.style.visibility = 'hidden';
    closeSearch.style.visibility = 'hidden';
  }

// View Transaction Function
  transaction(idx) {
  }

// View Card Number
async displayCardNumber(idx) {
  const alert = await this.alertController.create({
    cssClass: 'alert_popup',
    header: 'Validate',
    message: 'Enter PIN to view card number.',
    inputs: [{
      type: 'text',
      placeholder: 'Enter Pin'
    }
    ],
    buttons: [
      {
        text: 'Cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'Validate',
        cssClass: 'secondary',
        handler: () => {
          this.viewCardNumber(idx);
        }
      }
    ]
  });
  await alert.present();
}

  async viewCardNumber(idx) {
    const alert = await this.alertController.create({
      cssClass: 'alert_popup',
      subHeader: 'Your ' + this.bank[idx].title + ' card number.' ,
      message: this.bank[idx].content,
    });
    await alert.present();
  }

}
