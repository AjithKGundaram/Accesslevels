import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesslevelComponent } from './accesslevel.component';

describe('AccesslevelComponent', () => {
  let component: AccesslevelComponent;
  let fixture: ComponentFixture<AccesslevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesslevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesslevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
