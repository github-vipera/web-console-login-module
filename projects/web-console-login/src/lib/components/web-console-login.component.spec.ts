import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebConsoleLoginComponent } from './web-console-login.component';

describe('WebConsoleLoginComponent', () => {
  let component: WebConsoleLoginComponent;
  let fixture: ComponentFixture<WebConsoleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebConsoleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebConsoleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
