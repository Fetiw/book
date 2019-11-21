import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormAddComponent } from './books-form-add.component';

describe('BooksFormAddComponent', () => {
  let component: BooksFormAddComponent;
  let fixture: ComponentFixture<BooksFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
