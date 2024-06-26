import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecrutPage } from './recrut.page';

describe('RecrutPage', () => {
  let component: RecrutPage;
  let fixture: ComponentFixture<RecrutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecrutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
