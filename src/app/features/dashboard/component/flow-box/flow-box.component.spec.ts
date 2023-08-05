import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowBoxComponent } from './flow-box.component';

describe('FlowBoxComponent', () => {
  let component: FlowBoxComponent;
  let fixture: ComponentFixture<FlowBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowBoxComponent]
    });
    fixture = TestBed.createComponent(FlowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
