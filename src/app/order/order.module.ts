import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderParentComponent } from './order-parent.component';
import { MemberComponent } from './member.component';
import { PhysicianComponent } from './physician.component';
import { DiagnosisSearchComponent } from './diagnosis-search.component';
import { DiagnosisListComponent } from './diagnosis-list.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderParentComponent,
                 MemberComponent,
                 PhysicianComponent,
                 DiagnosisSearchComponent,
                 DiagnosisListComponent]
})
export class OrderModule { }
