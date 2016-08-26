import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe'

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriesPipe],
  template: `

  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">All</option>
  <option value="highCalories">High-Calories</option>
  <option value="lowCalories">Low-Calories</option>
  </select>

  <div *ngFor="#currentMeal of mealList | calories:selectedCalories" (click)="MealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal">
    <h3>{{currentMeal.name}} | {{currentMeal.description}} | {{currentMeal.calories}}</h3>
    <form *ngIf="currentMeal === selectedMeal">
      <input [(ngModel)]="currentMeal.name">
      <input [(ngModel)]="currentMeal.description">
      <input [(ngModel)]="currentMeal.calories">
    </form>
  </div>
  `
})

export class MealListComponent{
  public mealList:Meal[];
  public selectedMeal:Meal;

  MealClicked(currentMeal:Meal):void{
    this.selectedMeal=currentMeal;
  }

}
