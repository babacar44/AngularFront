import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiListComponent } from './envoi-list.component';

describe('EnvoiListComponent', () => {
  let component: EnvoiListComponent;
  let fixture: ComponentFixture<EnvoiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
