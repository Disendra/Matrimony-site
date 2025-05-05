import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { getReceivedInterests, interestSent, sendInterest, acceptInterest } from '../../constants/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export const Section = {
  isList: "isList",
  isInfo: "isInfo"
}

@Component({
  selector: 'app-profile-intrests',
  templateUrl: './profile-intrests.component.html',
  styleUrls: ['./profile-intrests.component.css']
})
export class ProfileIntrestsComponent {
  currentSection = Section.isList;
  showContact: boolean = false;
  interestSent: { [key: string]: boolean } = {};
  profileList: any[] = [];
  selectedProfile: any;
  currentPath: string;
  userId: string | null;

  constructor(private common: CommonService, private http: HttpClient, private router: Router) {
    this.currentPath = this.router.url;
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.common.listPage$.subscribe((shouldTrigger) => {
      if (shouldTrigger) {
        this.currentSection = Section.isList;
      }
    });

    if (this.currentPath === '/proposals-received') {
      this.interestsReceived(this.userId);
    } else if (this.currentPath === '/proposals-sent') {
      this.interestsSent(this.userId);
    }
  }

  interestsReceived(userId: any) {
    this.http.post(getReceivedInterests, { userId }).subscribe({
      next: (res: any) => {
        this.profileList = res.data;
      },
      error: (err) => {
        console.error('Failed to fetch received interests:', err);
      }
    });
  }

  interestsSent(userId: any) {
    this.http.post(interestSent, { userId }).subscribe({
      next: (res: any) => {
        this.profileList = res.data;
      },
      error: (err) => {
        console.error('Failed to fetch sent interests:', err);
      }
    });
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

  acceptInterest(profile: any) {
    const senderId = profile.id; // The profile that sent the interest
    const receiverId = localStorage.getItem('userId'); // Current user

    this.http.post(acceptInterest, { senderId, receiverId }).subscribe({
      next: () => {
        // Update the profile's receiver_status locally
        profile.receiver_status = 'accepted';
        this.interestSent[profile.id] = true; // Mark as accepted
      },
      error: (err) => {
        console.error('Failed to accept interest:', err);
      }
    });
  }

  viewProfile(profile: any) {
    this.currentSection = Section.isInfo;
    this.selectedProfile = profile;
  }

  onCandidateSelection() {
    // Handle candidate selection if needed
  }

  viewContactNumber() {
    this.showContact = true;
  }

  isMutualAccepted(profile: any): boolean {
    return profile.sender_status === 'accepted' && profile.receiver_status === 'accepted';
  }
}