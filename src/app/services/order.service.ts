import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

export interface ProductDetail {
  name: string;
  price:number;
  quantity: number;
}

export interface Order { 
  id:number;
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

  getOrderDetails(): Observable<Order[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => 
        response.$values.map((order: any) => ({ // Specify the type for order
          ...order,
          products: order.products.$values // Extract the products array
        }))
      )
    );
  }
}