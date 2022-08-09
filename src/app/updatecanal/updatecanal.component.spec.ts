import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecanalComponent } from './updatecanal.component';

describe('UpdatecanalComponent', () => {
  let component: UpdatecanalComponent;
  let fixture: ComponentFixture<UpdatecanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
