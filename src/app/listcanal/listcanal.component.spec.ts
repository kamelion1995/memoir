import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcanalComponent } from './listcanal.component';

describe('ListcanalComponent', () => {
  let component: ListcanalComponent;
  let fixture: ComponentFixture<ListcanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
