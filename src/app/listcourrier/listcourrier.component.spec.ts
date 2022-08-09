import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcourrierComponent } from './listcourrier.component';

describe('ListcourrierComponent', () => {
  let component: ListcourrierComponent;
  let fixture: ComponentFixture<ListcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
