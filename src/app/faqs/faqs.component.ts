import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panels = [
    { title: 'What is Data Roaming?', content: 'Data roaming occurs when you use data connection outside of your carriers coverage zone. Your mobile network can make substantial charges for roaming outside of your network coverage zone and you may end up with an enormous bill without realising it.', isOpen: false },
    { title: 'What products does Roambuddy offer for roaming?', content: 'Roambuddy offers data roaming plans with a coverage of over 180 countries and these plans are useable on any eSIM compatible phones. The eSIM compatible list is on the home page.    ', isOpen: false },
    { title: 'What is a data SIM Card?', content: 'A data only SIM a data allowance that allows users to have mobile Internet on their device, but no minutes for calling or texts for SMS. However, users can still make calls or send messages through applications like Skype, Whatsapp, Facebook Messenger etc ', isOpen: false },

  ];

  togglePanel(index: number) {
    this.panels[index].isOpen = !this.panels[index].isOpen;
  }

}
