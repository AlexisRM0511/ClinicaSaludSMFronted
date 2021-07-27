import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionGeneralComponent } from './atencion-general.component';

describe('AtencionGeneralComponent', () => {
  let component: AtencionGeneralComponent;
  let fixture: ComponentFixture<AtencionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
