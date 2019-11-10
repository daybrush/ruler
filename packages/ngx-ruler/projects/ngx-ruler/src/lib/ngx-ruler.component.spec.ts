import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRulerComponent } from './ngx-ruler.component';

describe('NgxRulerComponent', () => {
  let component: NgxRulerComponent;
  let fixture: ComponentFixture<NgxRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
