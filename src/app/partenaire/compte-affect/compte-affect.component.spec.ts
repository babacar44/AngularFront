import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAffectComponent } from './compte-affect.component';

describe('CompteAffectComponent', () => {
  let component: CompteAffectComponent;
  let fixture: ComponentFixture<CompteAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
