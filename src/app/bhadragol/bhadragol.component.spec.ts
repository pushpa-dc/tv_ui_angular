import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhadragolComponent } from './bhadragol.component';

describe('BhadragolComponent', () => {
  let component: BhadragolComponent;
  let fixture: ComponentFixture<BhadragolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhadragolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhadragolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
