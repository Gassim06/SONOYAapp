import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsPage } from './ins.page';

describe('InsPage', () => {
  let component: InsPage;
  let fixture: ComponentFixture<InsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
