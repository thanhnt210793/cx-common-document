import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDetailComponent } from './components-detail.component';

describe('ComponentsDetailComponent', () => {
  let component: ComponentsDetailComponent;
  let fixture: ComponentFixture<ComponentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
