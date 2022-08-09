import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcorComponent } from './detailcor.component';

describe('DetailcorComponent', () => {
  let component: DetailcorComponent;
  let fixture: ComponentFixture<DetailcorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
