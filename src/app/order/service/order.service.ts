import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';


@Injectable()
export class OrderService {

  order: Order = {
    requestId : 123,
    caseNumber : 1234,
    member: {  }
  };
  getOrder(): Order {
    return this.order;
  }

  updateMember( memberId: string ) {
    this.order.member.id = memberId;
  }
}
