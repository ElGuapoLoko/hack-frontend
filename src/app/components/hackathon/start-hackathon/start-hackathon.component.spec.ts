import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHackathonComponent } from './start-hackathon.component';

describe('StartHackathonComponent', () => {
  let component: StartHackathonComponent;
  let fixture: ComponentFixture<StartHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartHackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
