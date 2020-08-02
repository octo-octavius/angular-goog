import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface EditableChipListItem {
  text: string;
  disabled: boolean;
  color?: string;
  canRemove?: boolean;
}

@Component({
  selector: 'app-editable-chip-list',
  templateUrl: './editable-chip-list.component.html',
  styleUrls: ['./editable-chip-list.component.scss']
})
export class EditableChipListComponent implements OnInit {
  @Input() listItems: EditableChipListItem[];
  @Output() itemClick: EventEmitter<{ index: number, text: string }> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onListItemClick(index: number, text: string) {
  }

  onAddItemClick() {

  }
}
