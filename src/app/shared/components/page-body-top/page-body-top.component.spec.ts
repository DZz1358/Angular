import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBodyTopComponent } from './page-body-top.component';

describe('PageBodyTopComponent', () => {
  let component: PageBodyTopComponent;
  let fixture: ComponentFixture<PageBodyTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBodyTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBodyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
