import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ins2Page } from './ins2.page';

describe('Ins2Page', () => {
  let component: Ins2Page;
  let fixture: ComponentFixture<Ins2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ins2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
