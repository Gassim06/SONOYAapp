import { OverlayEventDetail } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  utilisateur=[
    {id:1,'nom':'Mohamed Touré','image':'Mohamed.jpg'},
    {id:2,'nom':'Diaka Kake','image':'Diaka.jpg'},
    {id:3,'nom':'Ibrahim','image':'Ibrahim.jpg'},
    {id:4,'nom':'Salif Cissé','image':'Salif.jpg'},
    {id:5,'nom':'Yélikha Traoré','image':'Yelikha .jpg'}
  ]

  constructor( private route : Router , private modal : ModalController) { }

  ngOnInit() {
  }
 getItems(users:any){
  const id = users.id
  const image = users.image
  const name = users.nom
  console.log(users)
   this.route.navigate(['/discussion/'+id],{ queryParams:{
    id,
    name,
    image }
   })
 }
 name: string="";

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    //this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
}
