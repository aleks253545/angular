import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockReposComponent } from './block-repos.component';

describe('BlockReposComponent', () => {
  let component: BlockReposComponent;
  let fixture: ComponentFixture<BlockReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
