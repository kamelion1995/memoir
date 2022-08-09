import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcorComponent } from './listcor.component';

describe('ListcorComponent', () => {
  let component: ListcorComponent;
  let fixture: ComponentFixture<ListcorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
