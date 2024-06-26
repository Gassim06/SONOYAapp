import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  segment:any='';
   imgSgs = [
    {'nom':'Lansana Soumah', 'img':'1650051522819.jpg'},
    {'nom':'Hakim Sanoh', 'img':'1650051988858.jpg'},
    {'nom':'Karim Sylla', 'img':'1662902971966.jpg'},
    {'nom':'Fatoumata sall', 'img':'1689800814605.jpg'}
   ];
   imgVs = [
    {'nom':'Dako Cissé', 'img':'1650052383487.jpg'},
    {'nom':'Gassim Cissé', 'img':'1678908394045.jpg'},
    {'nom':'Raby Cissé', 'img':'1678917549681.jpg'},
    {'nom':'Aissatou Bella Diallo', 'img':'1685806395964.jpg'},
    {'nom':'Aly Kourouma', 'img':'1690060341154.jpg'}

   ]
   imgGp= [
    {'nom':'family','img':'family.jpg'},
    {'nom':'Univers Amine','img':'amine.jpg'},
    {'nom':'Fans des CR7','img':'FansClus.jpg'},
    {'nom':'Islam','img':'islam.jpg'},
    {'nom':'Kamsar City','img':'Kamsar.jpg'},
    {'nom':'Attaque Des Titan','img':'AttaqueDesTitan.jpg'}

  ]   
  constructor() {
    this.segment="Suggestion"
  }

}
