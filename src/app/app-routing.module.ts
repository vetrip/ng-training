import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { OrderParentComponent } from './order/order-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/searchUser', pathMatch: 'full' },
  { path: 'forms', component: DashboardComponent },
  { path: 'order', component: OrderParentComponent },
  { path: 'searchUser', component: UserComponent },
  { path: 'forms/templateForms', component: TemplateFormsComponent },
  { path: 'forms/reactiveForms', component: ReactiveFormsComponent }
];
@NgModule({
  imports: [

    RouterModule.forRoot(routes , {enableTracing: false})
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
