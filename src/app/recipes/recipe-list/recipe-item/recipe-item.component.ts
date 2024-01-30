import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Recipe} from "../../recipe.model";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() index!: number;

}
