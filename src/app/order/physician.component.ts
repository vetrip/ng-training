import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  getMemberId(): string {
    return this.orderService.getOrder().member.id;
  }

}
