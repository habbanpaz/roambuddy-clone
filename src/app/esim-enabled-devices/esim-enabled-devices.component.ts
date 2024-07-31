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
    // 'asus ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN) ASUS_X00T_2',
    // 'asus ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN) ASUS_X00T_3',
    // 'asus ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN) ASUS_X00T_4',
    // 'asus ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN) ASUS_X00T_6',
    // 'asus ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN) ASUS_X00T_8',
    // 'asus ZenFone Max Pro M2 (ZB631KL) (WW) / Max Pro M2 (ZB630KL) (IN) ASUS_X01BD_1',
    'asus ZenFone Max Pro M2 (ZB631KL) (WW) / Max Pro M2 (ZB630KL) (IN) ASUS_X01BD_2',
    'BALMUDA BALMUDA Phone A101BM',
    'bq Aquaris X2 zangya_sprout',
    'bq Aquaris X2 PRO zangyapro_sprout',
    'CIBER B610A115 B610A115',
    'Covia CP-G3 CP-G3',
    'DOCOMO AQUOS R7 SH-52C',
    'DOCOMO AQUOS sense7 SH-53C',
    'docomo Xperia 1 IV SO-51C',
    // 'docomo Xperia 5 IV SO-54C',
    // 'DOOGEE V30 M23',
    // 'dtab dtab d-51C d-51C',
    // 'Energizer Hardcase H620S H620SEU',
    // 'Evolveo EVOLVEO StrongPhone G9 StrongPhone_G9',
    // 'Fairphone Fairphone4 FP4',
    // 'FCNT arrows We A101FC A101FC',
    // 'FCNT arrows BZ03 BZ03',
    // 'FCNT arrows N F-51C F51C',
    // 'Fossil Fossil Gen 5 LTE gila',
    // 'Gigaset Gigaset GX4 PRO GX4_PRO',
    // 'google Pixel 5a 5G barbet',
    // 'google Pixel 6a bluejay',
    // 'Google Pixel 3 blueline',
    // 'Google Pixel 3a XL bonito',
    // 'Google Pixel 4a (5G) bramble',
    // 'google Pixel 7 Pro cheetah',
    // 'Google Pixel 4 XL coral',
    // 'Google Pixel 3 XL crosshatch',
    // 'Google Pixel 4 flame',
    // 'Google Pixel 8 Pro G1MNW',
    // 'Google Pixel 7a G82U8',
    // 'Google Pixel 8 G9BOD',
    // 'Google Pixel 8 Pro GC3VE',
    // 'Google Pixel 7a GHL1X',
    // 'Google Pixel 8 GKWS6',
    // 'Google Pixel 7a GODZO',
    // 'Google Pixel 8 GPJ41',
    // 'Google Pixel 7a GWKK3',
    // 'google Pixel 6 oriole',
    // 'google Pixel 7 panther',
    // 'Google Pixel Fold Pixel Fold',
    // 'google Pixel 6 Pro raven',
    // 'Google Pixel 5 redfin',
    // 'Google Pixel 3a sargo',
    // 'Google Pixel 4a sunfish',
    // 'Google Pixel 2 XL taimen',
    // 'Google Pixel 2 walleye',
    // 'Hamic MIELS MIELS',
    // 'Hammer Hammer Blade 3 Hammer_Blade_3',
    // 'Hammer Hammer Blade 5G Hammer_Blade_5G',
    // 'Hammer Hammer Construction Hammer_Construction',
    // 'Hammer Hammer Explorer Pro Hammer_Expl_Pro',
    // 'Honeywell CT30XP CT30P',
    // 'Honeywell CT45 XP CT45P',
    // 'Honeywell CT47 CT47',
    // 'Honeywell EDA52 EDA52',
    // 'Honeywell EDA5S EDA5S',
    // 'HONOR FRI HNFRI',
    // 'HONOR HONOR Magic4 Pro HNLGE',
    // 'HONOR HONOR Magic5 Pro HNPGT',
    // 'Honor Honor Magic4 Pro LGE-AN10',
    // 'Honor Honor 90 REA-NX9',
    // 'Hoozo HZ0010J HZ0010J',
    // 'Huawei P40 ANA-AN00',
    // 'Huawei P40 ANA-LX4',
    // 'Huawei P40 ANA-NX9',
    // 'Huawei P40 ANA-TN00',
    // 'Huawei P40 Pro ELS-AN00',
    // 'Huawei P40 Pro ELS-N04',
    // 'Huawei P40 Pro ELS-NX9',
    // 'Huawei P40 Pro ELS-TN00',
    // 'Huawei Mate 40 Pro NOH-AN00',
    // 'Huawei Mate 40 Pro NOH-NX9',
    // 'isafemobile IS540 IS540',
    // 'KDDI AQUOS wish2 ANK',
    // 'KDDI AQUOS sense6s BOL',
    // 'KDDI AQUOS sense7 IVR',
    // 'KDDI Xperia 1 IV SOG06',
    // 'KDDI Xperia 10 IV SOG07',
    // 'KDDI Xperia Ace III SOG08',
    // 'KDDI Xperia 5 IV SOG09',
    // 'KDDI AQUOS zero6 XKH',
    // 'KDDI AQUOS wish YLI',
    // 'KDDI AQUOS sense6 ZMJ',
    // 'KYOCERA かんたんスマホ２ A001KC',
    // 'KYOCERA かんたんスマホ2+ A201KC',
    // 'KYOCERA DIGNO SANGA edition KC-S304',
    // 'KYOCERA DIGNO SX2 KY21L-ST100',
    // 'KYOCERA かんたんスマホ3 KY22L-SN300',
    // 'KYOCERA DIGNO SX3 KY22L-ST200',
    // 'KYOCERA Android One S10 S10-KC_sprout',
    // 'KYOCERA Android One S9 S9-KC_sprout',
    // 'Lenovo d-42A d-42A',
    // 'Lenovo d-52C d-52C',
    // 'LOGIC LOGIC MV01 LOGIC_MV01',
    // 'LOGIC LOGIC MV02 LOGIC_MV02',
    // 'MiTAC N672 hera_pro',
    // 'MiTAC N630 surfing_pro',
    // 'Mobvoi TicWatch Pro 3 Cellular/LTE rover',
    // 'Montblanc Summit 2+ coralia',
    // 'motorola moto g52j 5G cypfr',
    // 'Motorola Edge 40 Neo MC40B',
    // 'Motorola Edge+ Plus (2022) MOTXT22014W',
    // 'Motorola motorola razr olson',
    // 'motorola motorola razr 2022 oneli',
    // 'motorola moto g53y 5G penang',
    // 'Motorola motorola razr 5G smith',
    // 'Motorola Edge+ Plus XT2061-3',
    // 'Motorola Edge+ Plus (2022) XT2201-4',
    // 'Motorola Edge+ Plus (2022) XT2201DL',
    // 'Motorola Razr 2022 XT2251-1',
    // 'Motorola Edge 40 Pro XT2301-4',
    // 'Motorola Edge 40 XT2303-1',
    // 'Motorola Edge 40 XT2303-2',
    // 'Motorola Edge 40 Neo XT2307-1',
    // 'Motorola Razr 40 Ultra XT2321-3',
    // 'Motorola Moto G53 XT2335-1',
    // 'Motorola Moto G53 5G XT2335-2',
    // 'Motorola Moto G54 XT2343',
    // 'Motorola Solutions MOTOTRBO ION mkz_sdm660_64',
    // 'Myphone Hammer Blade 3 Hammer_Blade_3',
    // 'Myphone Hammer Explorer Pro Hammer_Expl_Pro',
    // 'Myphone myPhone Now eSIM myPhone_Now_eSIM',
    // 'MyPhone (PL) Hammer_Explorer Hammer_Explorer',
    // 'Nokia Nokia G60 5G APO_sprout',
    // 'Nokia Nokia X30 5G FCN_sprout',
    // 'Nokia XR21 TA-1486',
    // 'OnePlus OnePlus 11 5G OP594DL1',
    // 'OnePlus OnePlus 12 PJD110',
    // 'OPPO A77 A77',
    // 'OPPO Find X3 Pro CPH2173',
    // 'OPPO Find X5 Pro CPH2305',
    // 'OPPO OPPO Reno5 A OP4F2BL1',
    // 'Oppo Find X3 Pro OP4F57L1',
    // 'OPPO CPH2247 OP4F7FL1',
    // 'OPPO Find X5 Pro OP52D1L1',
    // 'OPPO Find X5 OP52D5L1',
    // 'OPPO A55s 5G OP52EBL1',
    // 'OPPO OPPO Reno7 A OP532BL1',
    // 'OPPO Find N2 Flip OP56CDL1',
    // 'Oppo OPPO Watch orca',
    // 'OPPO A5 PBBM30',
    // 'OPPO Find X3 Pro PEEM00',
    // 'OPPO Find X5 Pro PFEM10',
    // 'OPPO Find X5 PFFM10',
    // 'OPPO Find X5 Pro PFFM20',
    // 'Premier TAB-7304-16G3GS TAB-7304-16G3GS',
    // 'Rakuten C330 C330',
    // 'RAKUTEN AQUOS sense6 Chara',
    // 'Rakuten Rakuten BIG s gaea',
    // 'RAKUTEN AQUO'

    // Add more phone models here
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
