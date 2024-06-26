import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import Swiper from 'swiper';
import { OverlayEventDetail } from '@ionic/core';
//import SwiperCore,{EffectCube} from 'swiper/core';

//SwiperCore.use([EffectCube])
@Component({
  selector: 'app-recrut',
  templateUrl: './recrut.component.html',
  styleUrls: ['./recrut.component.scss'],
})
export class RecrutComponent  implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
swiper!:Swiper;
cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  //this.modal.dismiss(this.name, 'confirm');
}

onWillDismiss(event: Event) {
const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //if (ev.detail.role === 'confirm') {
    //this.message = `Hello, ${ev.detail.data}!`;
  
}

  constructor() { }

  ngOnInit() {
 this.swiper = new Swiper('.swiper-container', {
  slidesPerView:1,
  // Optional parameters
  effect:'coverflow',
  loop: true,
  autoplay:{
    delay:3000
  } ,     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 // scrollbar: {
   // el: '.swiper-scrollbar',
  //},
});

  }
}
