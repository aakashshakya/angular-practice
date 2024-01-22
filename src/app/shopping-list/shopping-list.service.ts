import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/Ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changedIngredientsArray = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Chicken", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changedIngredientsArray.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.changedIngredientsArray.emit(this.ingredients.slice());
  }
}
