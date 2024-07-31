import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivateSimComponent } from './activate-sim/activate-sim.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { OrderEsimPageComponent } from './order-esim-page/order-esim-page.component';
import { GlobalEsimComponent } from './global-esim/global-esim.component';
import { RegionalEsimComponent } from './regional-esim/regional-esim.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
{
  path: '',
  component: MainComponent
},
{
  path: 'order-esim-page',
  component: OrderEsimPageComponent
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
  path: 'global-esim',
  component: GlobalEsimComponent
},
{
  path: 'regional-esim',
  component: RegionalEsimComponent

},
{
  path: 'user-login',
  component: UserLoginComponent
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
