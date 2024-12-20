import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './book-card.component.html',
  styles: `
  // .card {
  //   box-sizing:border-box;
  //   border:1px solid grey;
  //   // width:23.33%;

  // }


  `
})
export class BookCardComponent {
@Input() book:any; // anyone who is using this component , must pass input attribute
}
