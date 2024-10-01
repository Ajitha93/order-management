import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {CreateOrderComponent } from './create-order/create-order.component';

@NgModule({ declarations: [
        AppComponent,
        OrderDetailsComponent,
        CreateOrderComponent 
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
