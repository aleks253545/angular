import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineReposComponent } from './line-repos.component';

describe('LineReposComponent', () => {
  let component: LineReposComponent;
  let fixture: ComponentFixture<LineReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
