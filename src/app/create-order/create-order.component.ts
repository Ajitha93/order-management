import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import {CustomerResponse} from '../interfaces/customer-response.interface';
import { ProductResponse } from '../interfaces/product-response.interface';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;
  customers: any[] = [];
  products: ProductResponse[] = [];

  constructor(private fb: FormBuilder,private orderService: OrderService) {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      orderDate: ['', Validators.required],
      products: this.fb.array([]) // Initialize an empty FormArray for products
    });
  }

  ngOnInit() {
    this.fetchCustomers();
    this.fetchProducts();
  }

  fetchCustomers() {
    this.orderService.getCustomers().subscribe((data: any) => {
      console.log(data); // Log the data to check its structure
      this.customers=data;      
      });    
  }

  fetchProducts() {
    this.orderService.getProducts().subscribe((data: any) => {
      console.log(data); // Log the data to check its structure
      this.products=data;
    });    
  }

  createProduct(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required], // Product ID
      quantity: [1, [Validators.required, Validators.min(1)]] // Default quantity
    });
  }

  addProduct(): void {
    this.productsFormArray.push(this.createProduct());
  }

  removeProduct(index: number): void {
    this.productsFormArray.removeAt(index);
  }

  get productsFormArray(): FormArray {
    return this.orderForm.get('products') as FormArray;
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      // Here you can call your API to save the order
      // this.http.post('YOUR_API_ENDPOINT', this.orderForm.value).subscribe(response => { ... });
    }
  }
}
