import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloaderComponent } from './dataloader.component';

describe('DataloadersComponent', () => {
  let component: DataloaderComponent;
  let fixture: ComponentFixture<DataloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
