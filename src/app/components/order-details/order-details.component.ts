import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId!: number;  
  order: Order | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['id']; // Get order ID from route params
      this.fetchOrderDetails();
    });
  }

  fetchOrderDetails(): void {
    this.orderService.getOrderDetails(this.orderId).subscribe(
      order => this.order = order,
      error => console.error('Error fetching order details:', error)
    );
  }
}
