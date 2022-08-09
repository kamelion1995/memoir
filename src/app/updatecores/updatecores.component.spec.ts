import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoresComponent } from './updatecores.component';

describe('UpdatecoresComponent', () => {
  let component: UpdatecoresComponent;
  let fixture: ComponentFixture<UpdatecoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
