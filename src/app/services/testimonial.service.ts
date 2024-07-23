import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  getTestimonial(){
    return[
      {
        text: 'Roambuddy is a life saver! I live in Ukraine and travel often for modeling assignments all around the world and it’s essential that I am always online wherever in the world I am. I’ve traveled in over 50 countries all around the world and Roambuddy is the most economic and reliable device that allows me to keep in touch with family, friends and my fans.',
        name: '— Olga K.',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      // {
      //   text: "Roambuddy has been a game changer for my business travels. As a sales executive, I frequently hop between continents, and having reliable internet access is crucial for my meetings and client interactions. Roambuddy's eSIM service ensures that I stay connected seamlessly, no matter where my job takes me. It’s fast, cost-effective, and has become an indispensable tool in my professional toolkit.",
      //   name: '— Philip J.',
      //   image: 'https://st.depositphotos.com/2931363/3703/i/450/depositphotos_37034497-stock-photo-young-black-man-smiling-at.jpg'
      // },
      // {
      //   text: 'Roambuddy is a life saver! I live in Ukraine and travel often for modeling assignments all around the world and it’s essential that I am always online wherever in the world I am. I’ve traveled in over 50 countries all around the world and Roambuddy is the most economic and reliable device that allows me to keep in touch with family, friends and my fans.',
      //   name: '— Tina O.',
      //   image: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'
      // },
    ]
  }

}
