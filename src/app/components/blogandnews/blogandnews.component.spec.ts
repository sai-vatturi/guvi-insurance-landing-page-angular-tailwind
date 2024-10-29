import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogandnewsComponent } from './blogandnews.component';

describe('BlogandnewsComponent', () => {
  let component: BlogandnewsComponent;
  let fixture: ComponentFixture<BlogandnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogandnewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogandnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
