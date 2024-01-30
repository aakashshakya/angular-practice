import {Component, OnInit} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgOptimizedImage} from "@angular/common";
import {RecipeService} from "../recipe.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, NgOptimizedImage, RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
