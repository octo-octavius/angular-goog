import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableChipListComponent } from './editable-chip-list.component';

describe('EditableChipListComponent', () => {
  let component: EditableChipListComponent;
  let fixture: ComponentFixture<EditableChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
