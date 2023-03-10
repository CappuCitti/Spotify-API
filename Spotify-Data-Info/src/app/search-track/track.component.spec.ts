import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrackComponent } from './track.component';

describe('SearchTrackComponent', () => {
  let component: SearchTrackComponent;
  let fixture: ComponentFixture<SearchTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
