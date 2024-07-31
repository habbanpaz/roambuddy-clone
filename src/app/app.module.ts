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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryEsimComponent } from './country-esim/country-esim.component';
import { RegionalEsimComponent } from './regional-esim/regional-esim.component';
import { GlobalEsimComponent } from './global-esim/global-esim.component';
import { EsimEnabledDevicesComponent } from './esim-enabled-devices/esim-enabled-devices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UserLoginComponent } from './user-login/user-login.component';

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
    OrderEsimPageComponent,
    CountryEsimComponent,
    RegionalEsimComponent,
    GlobalEsimComponent,
    EsimEnabledDevicesComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
