import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstageComponent } from './mainstage.component';

describe('MainstageComponent', () => {
  let component: MainstageComponent;
  let fixture: ComponentFixture<MainstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainstageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
