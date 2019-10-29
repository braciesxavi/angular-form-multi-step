import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProtectionComponent } from './content-protection.component';

describe('ContentProtectionComponent', () => {
  let component: ContentProtectionComponent;
  let fixture: ComponentFixture<ContentProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
