import { Component } from 'angular2/core';
import { Skeleton } from './meal.model';

@Component({
  selector: 'my-app',
  directives:[],
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
      var tempcalories : number = parsInt(MealDeatail[2]);

      this.meal.push(
        new Meal(MealDetail[0], MealDetail[1], tempcalories)
      );
    }
}
