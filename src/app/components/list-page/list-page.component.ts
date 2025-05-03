import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

export const Section = {
  isList : "isList",
  isInfo : "isInfo"
}


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{
  currentSection = Section.isList;
  interestSent: { [key: string]: boolean } = {};


 constructor(private common : CommonService) { }


 ngOnInit(): void {
  this.common.listPage$.subscribe((shouldTrigger) => {
    if (shouldTrigger) {
      console.log('Trigger received!');
      this.currentSection = Section.isList;
    }
  });
}



  profiles = [
    {
      id: 'TM3001',
      name: 'Ritu Tiwari',
      age: 24,
      height: '5\'7" (170 CM)',
      education: 'Undergraduate',
      religion: 'HINDU - Saraswathar',
      profession: 'Software Engineer',
      company: 'Bank Employee',
      location: 'Chennai, Tamil Nadu, India',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&q=80'
    },
    {
      id: 'TM3011',
      name: 'Divanka Sharma',
      age: 26,
      height: '5\'10" CM',
      education: "Master's Degree",
      religion: 'HINDU',
      profession: 'Bank Employee',
      company: 'SBI',
      location: 'Chennai, Tamil Nadu, India',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=400&q=80'
    },
    {
      id: 'TM3023',
      name: 'Jyoti Verma',
      age: 25,
      height: '5\'5"',
      education: 'Undergraduate',
      religion: 'HINDU - Saraswathar',
      profession: 'Software Engineer',
      company: 'TCS',
      location: 'Chennai, Tamil Nadu, India',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=400&q=80'
    },
    {
      id: 'TM3045',
      name: 'Khushi Singh',
      age: 25,
      height: '5\'6"',
      education: 'Undergraduate',
      religion: 'HINDU',
      profession: 'Teacher',
      company: 'DPS School',
      location: 'Chennai, Tamil Nadu, India',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fit=crop&w=400&q=80'
    }
  ];
  

  sendInterest(profile: any) {
    debugger;
    this.interestSent[profile.id] = true;
  }

  viewProfile(profile: any) {
    this.currentSection = Section.isInfo;
  }

  onCandiateSelction() {
    // this.currentSection = Section.isInfo;
  }

}
