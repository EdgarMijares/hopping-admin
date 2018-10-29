import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhopComponent } from './myhop.component';

describe('MyhopComponent', () => {
  let component: MyhopComponent;
  let fixture: ComponentFixture<MyhopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
