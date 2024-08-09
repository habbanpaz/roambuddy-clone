import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {

  selectedDeviceType: string = '';
  selectedPhoneModel: string = '';
  phoneModels: string[] = [];
  showPhoneDropdown: boolean = false;
  showBillingAddress: boolean = false;
  showOtpVerification: boolean = false;  
  showPaymentMethod: boolean = false;
  otpCode: string = '';

  applePhones: string[] = [
    'Apple iPhone 15 A2846', 
    'Apple iPhone 15 Plus A2847', 
    'Apple iPhone 15 Pro A2848', 
    'Apple iPhone 15 Pro Max A2849', 
    // Add more models as needed
  ];

  androidPhones: string[] = [
    'ABCTECH X20 X20',
    'asus ZenFone Max Pro M2',
    'BALMUDA BALMUDA Phone A101BM',
    // Add more models as needed
  ];

  billingAddress = {
    firstName: '',
    lastName: '',
    email: '',
    privacyPolicy: false,
    terms: false,
    nonRefundable: false,
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  onDeviceTypeChange() {
    this.selectedPhoneModel = ''; // Reset phone model selection
    if (this.selectedDeviceType === 'android') {
      this.phoneModels = this.androidPhones;
    } else if (this.selectedDeviceType === 'ios') {
      this.phoneModels = this.applePhones;
    } else {
      this.phoneModels = [];
    }
    this.showPhoneDropdown = this.phoneModels.length > 0;
  }

  showBilling() {
    this.showBillingAddress = true;
  }

  showOtpVerificationForm() {
    this.showOtpVerification = true;
  }

  verifyOtp() {
    // Logic to verify the OTP code
    if (this.otpCode === 'correct-otp') {
      this.router.navigate(['/confirmation']);
    } else {
      alert('Invalid OTP code');
    }
  }

}
