import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var chosenCalories = info[0];
    var output: Meal[] = [];

    if (chosenCalories === "highCalories") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories >=500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenCalories === "lowCalories") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
