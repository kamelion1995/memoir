import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcourrierComponent } from './detailcourrier.component';

describe('DetailcourrierComponent', () => {
  let component: DetailcourrierComponent;
  let fixture: ComponentFixture<DetailcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
