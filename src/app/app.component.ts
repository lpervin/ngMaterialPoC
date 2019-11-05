import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'materialTest';
  @ViewChild('drawer', {static: false}) drawer: MatDrawer;
  drawerToggle: boolean;

  ngOnInit(): void {
    this.drawerToggle = true;
  }

  toggleSideNav() {
   // alert('Will Do it');
   if (this.drawerToggle) {
      this.drawer.close();
   } else {
      this.drawer.open();
   }
   console.log(this.drawer);
   this.drawerToggle = !this.drawerToggle;
  }

}
