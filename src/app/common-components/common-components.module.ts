import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {EditableChipListComponent} from './editable-chip-list/editable-chip-list.component';
import {ComponentPlaygroundComponent} from './component-playground/component-playground.component';

@NgModule({
  declarations: [EditableChipListComponent, ComponentPlaygroundComponent,],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    EditableChipListComponent,
    ComponentPlaygroundComponent,
  ]
})
export class CommonComponentsModule {
}
