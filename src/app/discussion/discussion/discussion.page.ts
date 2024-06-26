import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { param } from 'query';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
  messages = [
    { text: 'Salut, comment ça va ?', type: 'received', timestamp: '10:00' },
    { text: 'Ça va bien, merci ! Et toi ?', type: 'sent', timestamp: '10:01' },
    { text: 'Je vais bien aussi, merci !', type: 'received', timestamp: '10:02' },
  ];
  isVraie:boolean=true
  //isFaux : boolean=false
  
  user_id : any
  nomUsers:any
  photos:any
  constructor( private active:ActivatedRoute) { }

  ngOnInit() {
    this.active.queryParams.subscribe(params=>{
      this.user_id = params['id'];
      this.nomUsers=params['name'];
      this.photos=params['image'];
    })
  }
  getColors() {
    let color = ''; // Déplacez la déclaration ici
    this.messages.forEach(message => {
      if (message.type === 'sent') {
        color = 'blue';
      } 
    });
    return color;
  }
  getColors1() {
    let color = ''; // Déplacez la déclaration ici
    this.messages.forEach(message => {
      if (message.type === 'received') {
        color = 'grey';
      } 
    });
    return color;
  }
    //return'blue'

}
