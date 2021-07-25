
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


  constructor(public actionSheetController: ActionSheetController, private router: Router, public alertController: AlertController) { }

  async travelActionSheet(id, title) {
    const actionSheet = await this.actionSheetController.create({
      header: title,
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
          this.deleteCard(id);

        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async bankActionSheet(param) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Banking',
      cssClass: 'action-sheet-cards',
      buttons: [{
        text: 'View Transactions',
        handler: () => {
          this.router.navigateByUrl('/details');
        }
      },{
        text: 'View Card Number',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Send Money',
        handler: () => {
        }
      },{
        text: 'Remove',
        cssClass: 'remove',
        handler: () => {
          this.deleteCard(param);
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async shoppingActionSheet(param) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Shop Now',
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
          this.deleteCard(param);
        }
      }]
    });
    await actionSheet.present();
  }


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
          }
        }
      ]
    });
    await alert.present();
  }

  delete(param) {
    const item = document.getElementById(param);
    item.remove();
  }

  ngOnInit() {
    fetch('./assets/data/travelCards.json').then(res => res.json()).then(json => {
      this.travel = json;
    });
    this.expand();
  }

  // moreTravel(param) {
  //   this.travelActionSheet(param);
  // }

  moreBank(param) {
    this.bankActionSheet(param);
  }

  moreShop(param) {
    this.shoppingActionSheet(param);
  }

  search() {
  }

  select(id, title, category) {
    if (category === 'travel') {
      this.travelActionSheet(id, title);
    }
  }

  close() {
    const searchBar = document.getElementById('search-bar');
    const searchActive = document.getElementById('search-active');
    const closeSearch = document.getElementById('close-search');

    searchBar.style.visibility = 'hidden';
    searchActive.style.visibility = 'visible';
    closeSearch.style.visibility = 'visible';
  }

  expand() {
    const searchBar = document.getElementById('search-bar');
    const closeSearch = document.getElementById('close-search');
    const searchActive = document.getElementById('search-active');

    searchBar.style.visibility = 'visible';
    searchActive.style.visibility = 'hidden';
    closeSearch.style.visibility = 'hidden';
  }


}
