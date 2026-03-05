import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtCreateCompComponent } from './evt-create-comp.component';

describe('EvtCreateCompComponent', () => {
  let component: EvtCreateCompComponent;
  let fixture: ComponentFixture<EvtCreateCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvtCreateCompComponent]
    });
    fixture = TestBed.createComponent(EvtCreateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
