import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any = [];
  categories: string[] = ['programming', 'art', 'cooking', 'music'];

}
