import {Component, OnInit} from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/Ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.changedIngredientsArray.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}
