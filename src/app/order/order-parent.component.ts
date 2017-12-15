import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';
import { Order } from './model/order.model';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;

  constructor(protected orderService: OrderService , private fb: FormBuilder) {
    this.createOrderForm();
  }

  ngOnInit() {
    this.order = this.orderService.getOrder();
  }

  createOrderForm() {
    this.orderForm = this.fb.group({
      memberId: [this.order.member.id, [ Validators.required ]],
      memberName: [this.order.member.name , [ Validators.required ]]
    });
  }
}
