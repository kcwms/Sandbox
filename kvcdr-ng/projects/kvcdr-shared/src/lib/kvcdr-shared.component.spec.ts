import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvcdrSharedComponent } from './kvcdr-shared.component';

describe('KvcdrSharedComponent', () => {
  let component: KvcdrSharedComponent;
  let fixture: ComponentFixture<KvcdrSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvcdrSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvcdrSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
