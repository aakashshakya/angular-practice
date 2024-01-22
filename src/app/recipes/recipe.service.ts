import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/Ingredient";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {
  }
  private recipes: Recipe[] = [new Recipe('Hamburger',
    'This is a tasty hamburger',
    'https://picsum.photos/100/100',
    [new Ingredient("Bun", 1),
      new Ingredient("Tomato", 1),
      new Ingredient("Lettuce", 2),
      new Ingredient("Chicken Patty", 2),
      new Ingredient("Pickle", 1),
      new Ingredient("Ketchup", 1)]),
    new Recipe('Momo',
      'The buff momo is tasty',
      'https://picsum.photos/100/100', [
        new Ingredient("Minced Buffalo Meat", 1),
        new Ingredient("Spring Onions", 2),
        new Ingredient("Momo Masala", 1),
        new Ingredient("Flour", 2),
        new Ingredient("Butter", 2)
      ])];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
