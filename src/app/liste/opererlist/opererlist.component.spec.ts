import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpererlistComponent } from './opererlist.component';

describe('OpererlistComponent', () => {
  let component: OpererlistComponent;
  let fixture: ComponentFixture<OpererlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpererlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpererlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
