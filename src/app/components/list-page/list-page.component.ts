import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { HttpClient } from '@angular/common/http';
import { getProfiles, sendInterest } from '../../constants/api';
import { casteOptions } from '../create-account/dropdown';

export const Section = {
  isList: "isList",
  isInfo: "isInfo"
}


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {
  @ViewChild('closeSearchForm') closeSearchForm!: ElementRef;
  currentSection = Section.isList;
  interestSent: { [key: string]: boolean } = {};
  profileList: any;
  selectedProfile: any;
  casteOptions = casteOptions
  errorMessage = '';
  searchForm = {
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    caste: '',
    country: '',
    maritalStatus: ''
  };

  constructor(private common: CommonService, private http: HttpClient) { }


  ngOnInit(): void {
    this.common.listPage$.subscribe((shouldTrigger) => {
      if (shouldTrigger) {
        console.log('Trigger received!');
        this.currentSection = Section.isList;
      }
    });
    this.getProfiles('onload')
  }

  getProfiles(type?: any) {
    const {
      gender,
      ageFrom,
      ageTo,
      religion,
      caste,
      country,
      maritalStatus
    } = this.searchForm;

    if (type != 'onload') {
      const isEmpty = !gender && !ageFrom && !ageTo && !religion && !caste && !country && !maritalStatus;
      if (isEmpty) {
        this.errorMessage = 'At least one value is required to search.';
        return;
      }
      if (ageFrom && ageTo && +ageFrom > +ageTo) {
        this.errorMessage = 'To Age must be greater than or equal to From Age.';
        return;
      }
    }

    this.errorMessage = '';
    this.http.post(getProfiles, this.searchForm).subscribe({
      next: (res: any) => {
        this.profileList = res.data;
        this.closeSearchForm.nativeElement.click();
      },
      error: (err) => {
        console.error('Search error:', err);
      }
    });
  }

  resetFilters() {
    this.searchForm = {
      gender: '',
      ageFrom: '',
      ageTo: '',
      religion: '',
      caste: '',
      country: '',
      maritalStatus: ''
    };
    this.errorMessage = '';
  }

  sendInterest(profile: any) {
    const senderId = localStorage.getItem('userId');
    const receiverId = profile.id;

    this.http.post(sendInterest, { senderId, receiverId }).subscribe({
      next: () => {
        this.interestSent[profile.id] = true;
      },
      error: (err) => {
        console.error('Failed to send interest:', err);
      }
    });
  }


  viewProfile(profile: any) {
    this.currentSection = Section.isInfo;
    this.selectedProfile = profile;
  }

  onCandiateSelction() {
    // this.currentSection = Section.isInfo;
  }

}
