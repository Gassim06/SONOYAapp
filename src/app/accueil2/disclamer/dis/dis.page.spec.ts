import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisPage } from './dis.page';

describe('DisPage', () => {
  let component: DisPage;
  let fixture: ComponentFixture<DisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
