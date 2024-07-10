import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OrderEsimComponent } from './order-esim/order-esim.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ActivateSimComponent } from './activate-sim/activate-sim.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing.module';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { OrderEsimPageComponent } from './order-esim-page/order-esim-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TestimonialsComponent,
    OrderEsimComponent,
    FaqsComponent,
    ActivateSimComponent,
    ContactComponent,
    TestimonialsPageComponent,
    OrderEsimPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
