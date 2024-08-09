import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EsimEnabledDevicesServiceService } from '../services/esim-enabled-devices-service.service';

@Component({
  selector: 'app-esim-enabled-devices',
  templateUrl: './esim-enabled-devices.component.html',
  styleUrls: ['./esim-enabled-devices.component.css']
})
export class EsimEnabledDevicesComponent implements OnInit {

  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();
  deviceTypes: string[] = ['Android', 'IOS'];
  selectedDeviceType!: string;
  selectedImageUrl!: string;
  selectedImageHeight!: string;
  activeSection: string = 'check';  // Default section


  iosPhones: string[] = [
    'Apple iPhone 15 A2846', 
    'Apple iPhone 15 Plus A2847', 
    'Apple iPhone 15 Pro A2848', 
    'Apple iPhone 15 Pro Max A2849', 
    'Apple iPhone 15 A3089', 
    'Apple iPhone 15 A3090', 
    'Apple iPhone 15 Plus A3093', 
    'Apple iPhone 15 Plus A3094', 
    // 'Apple iPhone 15 Pro A3101', 'Apple iPhone 15 Pro A3102', 'Apple iPhone 15 Pro Max A3105', 'Apple iPhone 15 Pro Max A3106', 'Apple iPad mini 5th Gen iPad11,2', 'Apple iPad Air 3rd Gen iPad11,4', 'Apple iPad 8th Gen (WiFi+Cellular) iPad11,7', 'Apple iPad Pro 12.9 inch 5th Gen iPad13,10', 'Apple iPad Pro 12.9 inch 5th Gen iPad13,11', 'Apple iPad Air 5th Gen (WiFi+Cellular) iPad13,17', 'Apple iPad 10th Gen iPad13,19', 'Apple iPad air 4th Gen (WiFi+Cellular) iPad13,2', 'Apple iPad Pro 11 inch 3rd Gen iPad13,5', 'Apple iPad Pro 11 inch 3rd Gen iPad13,6', 'Apple iPad Pro 12.9 inch 5th Gen iPad13,9', 'Apple iPad Pro 11 inch 4th Gen iPad14,4', 'Apple iPad Pro 12.9 inch 6th Gen iPad14,6', 'Apple iPad Pro 11 inch 4th Gen (WiFi+Cellular) iPad8,10', 'Apple iPad Pro 12.9 inch 4th Gen (WiFi+Cellular) iPad8,12', 'Apple iPad Pro 11 inch 3rd Gen (WiFi+Cellular) iPad8,3', 'Apple iPad Pro 11 inch 3rd Gen (1TB, WiFi+Cellular) iPad8,4', 'Apple iPad Pro 12.9 inch 3rd Gen (WiFi+Cellular) iPad8,7', 'Apple iPad Pro 12.9 inch 3rd Gen (1TB, WiFi+Cellular) iPad8,8', 'Apple iPhone XS iPhone11,2', 'Apple iPhone XS Max iPhone11,4', 'Apple iPhone XS Max Global iPhone11,6', 'Apple iPhone XR iPhone11,8', 'Apple iPhone 11 iPhone12,1', 'Apple iPhone 11 Pro iPhone12,3', 'Apple iPhone 11 Pro Max iPhone12,5', 'Apple iPhone SE 2nd Gen iPhone12,8', 'Apple iPhone 12 Mini iPhone13,1', 'Apple iPhone 12 iPhone13,2', 'Apple iPhone 12 Pro iPhone13,3', 'Apple iPhone 12 Pro Max iPhone13,4', 'Apple iPhone 13 Pro iPhone14,2', 'Apple iPhone 13 Pro Max iPhone14,3', 'Apple iPhone 13 Mini iPhone14,4', 'Apple iPhone 13 iPhone14,5', 'Apple iPhone SE 3rd Gen iPhone14,6', 'Apple iPhone 14 iPhone14,7', 'Apple iPhone 14 Plus iPhone14,8', 'Apple iPhone 14 Pro iPhone15,2', 'Apple iPhone 14 Pro Max iPhone15,3'

  ]
  androidPhones: string[] = [
    'ABCTECH X20 X20',
     'asus ZenFone Max Pro M2 (ZB631KL) (WW) / Max Pro M2 (ZB630KL) (IN) ASUS_X01BD_2',
    'BALMUDA BALMUDA Phone A101BM',
    'bq Aquaris X2 zangya_sprout',
    'bq Aquaris X2 PRO zangyapro_sprout',
    'CIBER B610A115 B610A115',
    'Covia CP-G3 CP-G3',
    'DOCOMO AQUOS R7 SH-52C',
    'DOCOMO AQUOS sense7 SH-53C',
    'docomo Xperia 1 IV SO-51C',


  ];


  constructor(private esimEnabledService: EsimEnabledDevicesServiceService) {}




  ngOnInit(): void {
    // Set default selected device type and image URL if necessary
    this.selectedDeviceType = this.deviceTypes[0];
    this.onDeviceTypeChange();
  }

  onDeviceTypeChange(): void {
    this.selectedImageUrl = this.imageUrls[this.selectedDeviceType];
    this.selectedImageHeight = this.imageHeights[this.selectedDeviceType];
  }

  showSection(section: string) {
    this.activeSection = section;
  }

  close() {
    
    this.isVisible = false;
    this.closeModal.emit();
    this.esimEnabledService.setModalState(false);
  }

  imageUrls: { [key: string]: string } = {
    'Android': 'https://www.roambuddy.world/assets/eSIM-Compatibility-Quick-check-guide-Android_page-0001.jpg',
    'IOS': 'https://www.roambuddy.world/assets/ios-compatibility.jpg'
  };

  imageHeights: { [key: string]: string } = {
    'Android': '1230px',
    'IOS': '750px'  // Adjust the height as necessary
  };



}
