import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
