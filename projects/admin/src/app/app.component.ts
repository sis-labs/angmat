import { Component } from '@angular/core';

// TODO: move this in a dedicated entry
interface MenuEntry {
  name: String;
  label: String;
  link: String;
  icon: String;
  info?: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'admin';
  menuEntries: Array<MenuEntry> = [
    {
      name: 'home',
      label: 'Home',
      icon: 'folder',
      link: '/home',
    },
    {
      name: 'users',
      label: 'Users',
      icon: 'folder',
      link: '/users'
    }
  ];

  onMenuItemClick (item) {
    console.log('clicked', item);
  }
}
