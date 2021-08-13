import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDetailsPage } from './shopping-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingDetailsPageRoutingModule {}
