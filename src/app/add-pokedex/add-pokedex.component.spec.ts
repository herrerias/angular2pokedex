/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPokedexComponent } from './add-pokedex.component';

describe('AddPokedexComponent', () => {
  let component: AddPokedexComponent;
  let fixture: ComponentFixture<AddPokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
