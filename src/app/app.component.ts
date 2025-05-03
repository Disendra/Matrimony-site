import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSplash = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }

}
