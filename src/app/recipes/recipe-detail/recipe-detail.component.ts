import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Recipe} from "../recipe.model";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DropdownDirective
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  transferToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
