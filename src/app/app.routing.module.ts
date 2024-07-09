import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderEsimComponent } from './order-esim/order-esim.component';
import { ActivateSimComponent } from './activate-sim/activate-sim.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
  path: 'order-esim',
  component: OrderEsimComponent
},
{
  path: 'activate-sim',
  component: ActivateSimComponent
},
{
  path: 'testimonials',
  component: TestimonialsComponent
},
{
  path: 'faqs',
  component: FaqsComponent
},
{
  path: 'contact',
  component: ContactComponent
}

]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule { }
