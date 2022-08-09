import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouparticipanComponent } from './ajouparticipan.component';

describe('AjouparticipanComponent', () => {
  let component: AjouparticipanComponent;
  let fixture: ComponentFixture<AjouparticipanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouparticipanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouparticipanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
