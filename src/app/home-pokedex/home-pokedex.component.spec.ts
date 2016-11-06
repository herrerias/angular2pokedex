/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePokedexComponent } from './home-pokedex.component';

describe('HomePokedexComponent', () => {
  let component: HomePokedexComponent;
  let fixture: ComponentFixture<HomePokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
