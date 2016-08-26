import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { addMealComponent } from './new-meal.component'

@Component({
  selector: 'my-app',
  directives:[MealListComponent, addMealComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>

    <meal-list [mealList]="meal"></meal-list>

  </div>
  `
})

export class AppComponent {
  public meal: Meal[];
    constructor(){
      this.meal = [
        new Meal("Burger", "burger with bacon", 1000),
        new Meal("Salad", "lettuce", 100),
        new Meal("Fries", "with cheese", 600)
      ];
    }

    createMeal(MealDetail:string[]):void{
    var tempcalories : number = parseInt(MealDetail[2]);

    this.meal.push(
      new Meal(MealDetail[0], MealDetail[1], tempcalories)
    );
   }
  }
