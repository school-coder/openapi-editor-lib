import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenapiEditorLibComponent } from './openapi-editor-lib.component';

describe('OpenapiEditorLibComponent', () => {
  let component: OpenapiEditorLibComponent;
  let fixture: ComponentFixture<OpenapiEditorLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenapiEditorLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenapiEditorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
