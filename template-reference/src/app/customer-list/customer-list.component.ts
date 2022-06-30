import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedCustomer;

  customers: Customer[] = [
    {customerNo: 1, name: 'Mark Vought', address: '', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA'},
    {customerNo: 3, name: 'Merry Ann', address: '', city: 'Berlin', country: 'Germany'},
    {customerNo: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: 'India'},
    {customerNo: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'India'}
  ]
}
