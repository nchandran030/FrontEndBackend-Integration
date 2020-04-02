import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteFileComponent } from './write-file.component';

describe('WriteFileComponent', () => {
  let component: WriteFileComponent;
  let fixture: ComponentFixture<WriteFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
