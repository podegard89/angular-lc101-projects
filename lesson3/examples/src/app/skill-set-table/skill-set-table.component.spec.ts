import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetTableComponent } from './skill-set-table.component';

describe('SkillSetTableComponent', () => {
  let component: SkillSetTableComponent;
  let fixture: ComponentFixture<SkillSetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
