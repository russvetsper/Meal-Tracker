import { Component,EventEmitter } from 'angular2/core';
import { Meal } from './meal.model'


@Component({
  selector: 'add-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: '/app/new-meal.component.html'
})

export class addMealComponent{
  public onSubmitNewMeal: EventEmitter<string[]>
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
}
