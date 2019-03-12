import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalTreeDocComponent } from './hierarchical-tree.component';

describe('HierarchicalTreeComponent', () => {
  let component: HierarchicalTreeDocComponent;
  let fixture: ComponentFixture<HierarchicalTreeDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchicalTreeDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalTreeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
