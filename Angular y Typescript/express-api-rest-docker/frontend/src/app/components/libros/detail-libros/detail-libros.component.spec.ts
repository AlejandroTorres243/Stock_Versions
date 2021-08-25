import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLibrosComponent } from './detail-libros.component';

describe('DetailLibrosComponent', () => {
  let component: DetailLibrosComponent;
  let fixture: ComponentFixture<DetailLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
