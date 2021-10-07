import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeplelistComponent } from './poeplelist.component';

describe('PoeplelistComponent', () => {
  let component: PoeplelistComponent;
  let fixture: ComponentFixture<PoeplelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeplelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
