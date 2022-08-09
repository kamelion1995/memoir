import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcanalComponent } from './detailcanal.component';

describe('DetailcanalComponent', () => {
  let component: DetailcanalComponent;
  let fixture: ComponentFixture<DetailcanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
