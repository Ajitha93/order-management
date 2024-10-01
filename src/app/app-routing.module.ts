import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  // { path: 'orders', component: OrderDetailsComponent },
  // { path: 'createOrders', component: CreateOrderComponent },
  { path: '**', redirectTo: 'orders' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
