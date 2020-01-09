import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  header = document.getElementById('header');
  title = 'REST Countries Api With Color Theme Switcher';

  //   countries-wrapper
  // header

  themeChange () {
    this.header.classList.toggle('dark-theme')

  }
}
