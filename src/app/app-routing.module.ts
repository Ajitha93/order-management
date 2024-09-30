import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: 'orders', component: OrderDetailsComponent },
  { path: '**', redirectTo: 'orders' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
