import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRecrutPage } from './list-recrut.page';

describe('ListRecrutPage', () => {
  let component: ListRecrutPage;
  let fixture: ComponentFixture<ListRecrutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRecrutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
