import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService) {
  }

  @Input() recipe!: Recipe;


  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
