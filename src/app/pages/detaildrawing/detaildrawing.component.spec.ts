import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildrawingComponent } from './detaildrawing.component';

describe('DetaildrawingComponent', () => {
  let component: DetaildrawingComponent;
  let fixture: ComponentFixture<DetaildrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaildrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaildrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
