import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';
import * as jQuery from 'jquery';
import 'datatables.net';
// import 'datatables.net-dt/css/dataTables.dataTables.min.css'; 

declare var $: any; 

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orders: Order[] = [];
  // @Input() showGrid: boolean; // Receive message from parent

  constructor(private orderService: OrderService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  ngAfterViewInit(): void {
    // Initialize DataTable or any other jQuery plugin here
    // $('#ordersTable').DataTable(); // Ensure this line is in ngAfterViewInit
      // jQuery('#ordersTable').DataTable(); 
  }

  loadOrders(): void {
    this.orderService.getOrderDetails().subscribe(
      (data) => {
        console.log('Fetched orders:', data); // Log the data to inspect
        this.orders = data;
        this.cdr.detectChanges(); // Trigger change detection
        // jQuery('#ordersTable').DataTable(); 
        // this.initializeDataTable(); // Initialize DataTable after data is loaded
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  // initializeDataTable(): void {
  //   setTimeout(() => {
  //     $('#ordersTable').DataTable(); // Initialize DataTable
  //   }, 0);
  // }
  
}
