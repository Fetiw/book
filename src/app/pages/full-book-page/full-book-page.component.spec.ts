import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBookPageComponent } from './full-book-page.component';

describe('FullBookPageComponent', () => {
  let component: FullBookPageComponent;
  let fixture: ComponentFixture<FullBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
