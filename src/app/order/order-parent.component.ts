import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  constructor(protected orderService: OrderService) { }

  ngOnInit() {
  }

}
