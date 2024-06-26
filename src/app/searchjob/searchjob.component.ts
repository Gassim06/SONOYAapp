import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.scss'],
})
export class SearchjobComponent  implements OnInit {
  jobs = [
    {
      title: 'Amado Group corporation',
      company: 'Multi-enterprise',
      location: 'Conakry, Guinée',
      companyLogo: 'AGC.png'
    },
    {
      title: 'Bast Finance',
      company: 'Finance',
      location: 'Lyon, France',
      companyLogo: 'BAST.jpg'
    },
    /*{
      title: 'Développeur Full Stack',
      company: 'Tech Company',
      location: 'Paris, France',
      companyLogo: 'assets/company-logo1.png'
    },
    {
      title: 'Data Scientist',
      company: 'Data Corp',
      location: 'Lyon, France',
      companyLogo: 'assets/company-logo2.png'
    },
    {
      title: 'Développeur Full Stack',
      company: 'Tech Company',
      location: 'Paris, France',
      companyLogo: 'assets/company-logo1.png'
    },
    {
      title: 'Data Scientist',
      company: 'Data Corp',
      location: 'Lyon, France',
      companyLogo: 'assets/company-logo2.png'
    },*/
    
  ];

  constructor() { }

  ngOnInit() {}

}
