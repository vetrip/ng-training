import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from './model/order.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberForm: FormGroup;
  order: Order;

  constructor(private orderService: OrderService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log('init member comp');
    this.order = this.orderService.getOrder();
    this.createMemberForm();
   }

  createMemberForm() {
    console.log(this.order.member.id);
    this.memberForm = this.fb.group({
      id: [this.order.member.id, [Validators.required]],
      name: [this.order.member.name, [Validators.required]]
    });
  }

  submitMember() {
    console.log(this.memberForm.valid);
    console.log(this.memberForm.value);
    this.orderService.updateMember(this.memberForm.value);
  }
}
