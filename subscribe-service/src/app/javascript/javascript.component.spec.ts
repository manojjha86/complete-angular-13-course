import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptComponent } from './javascript.component';

describe('JavascriptComponent', () => {
  let component: JavascriptComponent;
  let fixture: ComponentFixture<JavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
