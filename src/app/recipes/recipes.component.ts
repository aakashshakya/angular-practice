import {Component, OnInit} from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
