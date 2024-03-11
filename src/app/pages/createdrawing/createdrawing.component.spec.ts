import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedrawingComponent } from './createdrawing.component';

describe('CreatedrawingComponent', () => {
  let component: CreatedrawingComponent;
  let fixture: ComponentFixture<CreatedrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
