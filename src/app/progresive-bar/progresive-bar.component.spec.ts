import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresiveBarComponent } from './progresive-bar.component';

describe('ProgresiveBarComponent', () => {
  let component: ProgresiveBarComponent;
  let fixture: ComponentFixture<ProgresiveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresiveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
