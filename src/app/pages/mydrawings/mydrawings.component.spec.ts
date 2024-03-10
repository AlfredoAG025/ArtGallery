import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydrawingsComponent } from './mydrawings.component';

describe('MydrawingsComponent', () => {
  let component: MydrawingsComponent;
  let fixture: ComponentFixture<MydrawingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MydrawingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MydrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
