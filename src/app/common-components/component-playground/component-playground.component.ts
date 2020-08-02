import { Component, OnInit } from '@angular/core';
import {EditableChipListItem} from '../editable-chip-list/editable-chip-list.component';

@Component({
  selector: 'app-component-playground',
  templateUrl: './component-playground.component.html',
  styleUrls: ['./component-playground.component.scss']
})
export class ComponentPlaygroundComponent implements OnInit {
  items: EditableChipListItem[] = [
    {text: 'A very long text', canRemove: true, color: '#FF9800', disabled: false },
    {text: 'Short', canRemove: true, color: '#CDDC39', disabled: false },
    {text: 'A very very long text', canRemove: true, color: '#03A9F4', disabled: false },
    {text: 'Removable', canRemove: true, color: '#F44336', disabled: false },
    {text: 'A very long text', canRemove: true, color: '#FF9800', disabled: false },
    {text: 'Short', canRemove: true, color: '#CDDC39', disabled: false },
    {text: 'A very very long text', canRemove: true, color: '#03A9F4', disabled: false },
    {text: 'Removable', canRemove: true, color: '#F44336', disabled: false },
    {text: 'A very long text', canRemove: true, color: '#FF9800', disabled: false },
    {text: 'Short', canRemove: true, color: '#CDDC39', disabled: false },
    {text: 'A very very long text', canRemove: true, color: '#03A9F4', disabled: false },
    {text: 'Removable', canRemove: true, color: '#F44336', disabled: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
