import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <div *ngFor="#currentMeal of mealList" (click)="MealClicked(currentMeal)">
    <h3>{{currentMeal.name}} | {{currentMeal.description}} | {{currentMeal.calories}}</h3>
    <form *ngIf="currentMeal === selectedMeal">
      <input [(ngModel)]="currentMeal.name">
      <input [(ngModel)]="currentMeal.description">
      <input [(ngModel)]="currentMeal.calories">
    </form>
  </div>
  `
})
