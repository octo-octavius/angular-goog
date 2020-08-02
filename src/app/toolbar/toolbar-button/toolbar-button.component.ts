import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.css']
})
export class ToolbarButtonComponent implements OnInit {
  // Text shown in the tooltip.
  @Input() tooltipText: string;
  // Text shown inside the button to the right of icon.
  @Input() buttonText: string;
  // Represents if the button should be selected state.
  @Input() selected: boolean;
  // Guided help id
  @Input() guidedHelpId?: string;
  // Text shown inside the badge
  @Input() badgeText: string;

  // Click handler for the button.
  @Output() click: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
