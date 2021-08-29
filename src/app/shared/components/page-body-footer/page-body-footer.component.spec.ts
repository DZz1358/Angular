import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBodyFooterComponent } from './page-body-footer.component';

describe('PageBodyFooterComponent', () => {
  let component: PageBodyFooterComponent;
  let fixture: ComponentFixture<PageBodyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBodyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
