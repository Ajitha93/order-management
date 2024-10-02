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
      // jQuery('#ordersTable').DataTable({
      //   paging: true,       // Enable pagination
      //   searching: true,    // Enable search
      //   ordering: true,     // Enable sorting
      //   order: [[0, 'asc']], // Default order by ID ascending
      //   pageLength: 10      // Set default page length
      // });      
  }

  loadOrders(): void {
    this.orderService.getOrderDetails().subscribe(
      (data) => {
        console.log('Fetched orders:', data); // Log the data to inspect
        this.orders = data;
        this.cdr.detectChanges(); // Trigger change detection       
        this.initializeDataTable(); // Initialize DataTable here
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  initializeDataTable() {
    // Destroy previous instance if exists
    if (jQuery.fn.dataTable.isDataTable('#ordersTable')) {
      jQuery('#ordersTable').DataTable().destroy();
    }

    // Initialize DataTable
    jQuery('#ordersTable').DataTable({
      paging: true,
      searching: true,
      ordering: true,
      order: [[0, 'asc']],
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50],
      language: {
        lengthMenu: "Display _MENU_ records per page",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
      }
    });
  }

  
  
}
