/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPokedexComponent } from './list-pokedex.component';

describe('ListPokedexComponent', () => {
  let component: ListPokedexComponent;
  let fixture: ComponentFixture<ListPokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
