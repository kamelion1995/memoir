import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecourrierComponent } from './updatecourrier.component';

describe('UpdatecourrierComponent', () => {
  let component: UpdatecourrierComponent;
  let fixture: ComponentFixture<UpdatecourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
