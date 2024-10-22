import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './view-book.component.html',
  styles: `
  .carousel-inner{
    box-sizing:border-box;
    border:1px solid Gray;
    width:1500px;
    height:500px;
    padding:20px;
    margin:50px;
    background-color:#225be8;
    color:#fafbfc ;
  }
  
  
  
  `
})
export class ViewBookComponent {

}
