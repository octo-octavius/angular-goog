import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsplayComponent } from './rxjsplay.component';

describe('RxjsplayComponent', () => {
  let component: RxjsplayComponent;
  let fixture: ComponentFixture<RxjsplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
