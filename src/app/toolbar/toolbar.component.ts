import {Component, OnInit, Type} from '@angular/core';
import {ToolbarButtonComponent} from './toolbar-button/toolbar-button.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private buttons: Array<any> = []
  constructor() {
    this.buttons.push({
      buttonText: "View snapshot",
      tooltipText:"This is view snapshot",
      selected: true,
      guidedHelpId: "100302",
      click: () => {
        console.log("clicked")
      }
    });
    this.buttons.push({
      buttonText: "View snapshot",
      tooltipText:"This is view snapshot",
      guidedHelpId: "100302",
      click: () => {
        console.log("clicked")
      }
    });
    this.buttons.push({
      buttonText: "View snapshot",
      tooltipText:"This is view snapshot",
      guidedHelpId: "100302",
      click: () => {
        console.log("clicked")
      },
      badgeText: '10'
    });
    this.buttons.push({
      tooltipText:"This is view snapshot",
      selected: false,
      guidedHelpId: "100302",
      click: () => {
        console.log("clicked")
      }
    });
  }

  ngOnInit() {
  }

}
