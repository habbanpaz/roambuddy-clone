import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // menuType: String = 'default'
  // userName: string = ''
  constructor(private route : Router) { }

  ngOnInit(): void {
    // this.route.events.subscribe((val: any) => {
    //   if (val.url) {
    //     if (localStorage.getItem('user') && val.url.includes('user')) {
    //       console.warn("in user area")
    //       if (localStorage.getItem('user')) {
    //         let userStore = localStorage.getItem('user')
    //         let userData = userStore && JSON.parse(userStore)[0]
    //         this.menuType = 'user'
    //         this.userName = userData.name;
    //       }
    //     } else {
    //       console.warn("outside the seller's area")
    //       this.menuType = 'default'
    //     }
    //   }
    // })
  }

  @Input() isModalOpen: boolean = false;


  

}
