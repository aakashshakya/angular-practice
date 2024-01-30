import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Recipe} from "../recipe.model";
import {DropdownDirective} from "../../shared/dropdown.directive";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DropdownDirective,
    RouterLink
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  transferToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
