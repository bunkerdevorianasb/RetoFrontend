import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidevarComponent } from './sidevar.component';

describe('SidevarComponent', () => {
  let component: SidevarComponent;
  let fixture: ComponentFixture<SidevarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidevarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidevarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(SidevarComponent);
  });
});
