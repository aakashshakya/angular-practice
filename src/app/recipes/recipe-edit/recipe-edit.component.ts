import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.id = +value['id'];
      this.editMode = value['id'] != null;
    });
  }

}
