import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  updateMember( memberId: string) {
    console.log(memberId);
    this.orderService.updateMember(memberId);
  }

}
