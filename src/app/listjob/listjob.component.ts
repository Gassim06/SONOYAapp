import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listjob',
  templateUrl: './listjob.component.html',
  styleUrls: ['./listjob.component.scss'],
})
export class ListjobComponent  implements OnInit {
  listjob= [
    {nom:'Nassou Camara',type:'Miage',specialisation:'Dévéloppeur',img:'Nassou.jpg'},
    {nom:'Mamadou Yahya Diallo',type:'Miages',specialisation:'Comptable',img:'Mamdou.jpeg'},
    {nom:'Gassim Cisse',type:'Ingenieur information',specialisation:'Programmeur Informatique',img:'Gassim.jpeg'},
    {nom:'Aissatou Condé',type:'Adminisation des affaire',specialisation:'Marketeur',img:'Aicha.jpg'},
    {nom:'Claire Haba',type:'Genie civil',specialisation:'Architecte',img:'claire.jpeg'},
    {nom:'Ibrahim Cissé',type:'Comptabilité',specialisation:'Comptable',img:''}
  ]

  constructor() { }

  ngOnInit() {}

}
