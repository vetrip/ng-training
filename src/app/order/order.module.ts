import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderParentComponent } from './order-parent.component';
import { MemberComponent } from './member.component';
import { PhysicianComponent } from './physician.component';
import { DiagnosisSearchComponent } from './diagnosis-search.component';
import { DiagnosisListComponent } from './diagnosis-list.component';
import { OrderService } from './service/order.service';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from '../reactive-forms.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {path: '', component : OrderParentComponent}
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderParentComponent,
                 MemberComponent,
                 PhysicianComponent,
                 DiagnosisSearchComponent,
                 DiagnosisListComponent
                ],
  // providers: [OrderService],
  exports: [ RouterModule]
})
export class OrderModule {
  /* static forRoot() {
    return {
      ngModule: OrderModule,
      providers: [OrderService]
    };
  } */
}
