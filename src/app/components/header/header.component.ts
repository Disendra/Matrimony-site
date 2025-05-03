import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarOpen: boolean = false; // Declaration

  constructor(private common : CommonService, private router : Router) { }

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
    this.sidebarOpen = false;
  }
}
