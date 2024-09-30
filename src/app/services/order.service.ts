import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductDetail {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  products: ProductDetail[];
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private apiUrl = 'https://localhost:7151/api/order'; 

  constructor(private http: HttpClient) {}

  getOrderDetails(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }
}