import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {BasicHighlightDirective} from "./game/directives/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "./game/directives/better-highlight.directive";
import {UnlessDirective} from "./game/directives/unless.directive";
// import {GameControlComponent} from "./game/game-control/game-control.component";
// import {OddComponent} from "./game/odd/odd.component";
// import {EvenComponent} from "./game/even/even.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RecipesComponent, ShoppingListComponent, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective, //These are for emitter practice
    // GameControlComponent, OddComponent, EvenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature: string = 'recipe';

  //This method is just created for emitter practice
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 == 0) {
  //     this.evenNumbers.push(firedNumber)
  //   } else {
  //     this.oddNumbers.push(firedNumber)
  //   }
  // }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
