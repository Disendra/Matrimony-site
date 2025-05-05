import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  sidebarOpen: boolean = false;
  isLogin: boolean = false;

  constructor(private common: CommonService, private router: Router) { }

  ngOnInit(): void {
    let mobileNumber = localStorage.getItem('mobileNumber') || '';
    let token = localStorage.getItem('token') || '';
    if (mobileNumber && token) {
      this.isLogin = true;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  navigateTo(route: string) {
    this.router.navigateByUrl('/' + route)
    this.sidebarOpen = false;
  }

  onHomePage() {
    this.router.navigate(['/']).then(() => {
      this.common.triggerHomeAction();
    });
  }

  logout() {
    console.log('Logging out');
    localStorage.clear();
    sessionStorage.clear();
    this.sidebarOpen = false;
    window.location.reload()
  }
}
