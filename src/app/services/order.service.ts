import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { CustomerResponse } from '../interfaces/customer-response.interface';
import { ProductResponse } from '../interfaces/product-response.interface';

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
  private custUrl='https://localhost:7189/api/order/customer';
  private prodUrl='https://localhost:7189/api/order/product';

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

  getCustomers(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(this.custUrl);
  }

  getProducts(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(this.prodUrl);
  }
}