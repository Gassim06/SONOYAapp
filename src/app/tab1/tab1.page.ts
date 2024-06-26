import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  swiper !: Swiper;
  
   MyImage = [
   'IMG_20220723_232355_326.jpg',
   'IMG_20220723_232404_225.jpg',
   'IMG_20220812_070211_184.jpg',
   'IMG_20220831_124237_627.jpg',
   'IMG_20220831_124319_522.jpg',
   'IMG_20230319_020300_262.jpg',
   'IMG_20230416_122938_303.jpg'
  ];
  ImgAccueil=[
    {'profit':'raby.jpg','nom':'Raby Cissé','publication':'raby.jpg'},
    {'profit':'Aissatou.jpg','nom':'Aissatou Fofana','publication':'Aissatou.jpg'},
    {'profit':'Appiah.jpeg','nom':'Marie Koffi Appiah','publication':'Appiah.jpeg'},
    {'profit':'Bella.jpg','nom':'Aissatou Bella Diallo','publication':'Bella.jpg'},
    {'profit':'Kalla.jpg','nom':'Almamy Kalla Camara','publication':'Kalla.jpg'},
    {'profit':'fodé.jpg','nom':'Fodé Touré','publication':'pour rire.jpeg'},
    {'profit':'Kalla.jpg','nom':'Almamy Kalla Camara','publication':'juste Pour rire.jpeg'}

  ]
  isAlertOpen = false;
  alertButtons = ['Action'];

  setOpen1(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];


  constructor() {
   
  }
  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
  
  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  

}
  

