import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivateSimComponent } from './activate-sim/activate-sim.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { OrderEsimPageComponent } from './order-esim-page/order-esim-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';

const routes: Routes = [
{
  path: '',
  component: MainComponent
},
{
  path: 'order-esim-page',
  component: OrderEsimPageComponent,

},
{
  path: 'activate-sim',
  component: ActivateSimComponent
},
{
  path: 'testimonials-page',
  component: TestimonialsPageComponent
},
{
  path: 'faqs',
  component: FaqsComponent
},
{
  path: 'contact',
  component: ContactComponent

},

{
  path: 'user-login',
  component: UserLoginComponent
},
{
  path: 'user-home',
  component: UserHomeComponent
},
{
  path: 'payment-modal',
  component: PaymentModalComponent   ,
   data: { showHeaderFooter: false } // Add this line to control visibility

}

]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule { }
