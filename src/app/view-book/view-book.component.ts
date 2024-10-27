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
    // border:1px solid Gray;
    width:1500px;
    height:500px;
    padding:25px;
    margin:50px;
    background-color:#225be8;
    color:#fafbfc ;
  }
  .gallery{
    padding:10px;
    margin:30px;
  }
  div.gallery {
  margin: 30px;
  border: 4px solid #b9a1a1;
  float: left;
  width: 180px;
  height: 250px;
}
div.gallery:hover{
    border: 4px solid grey;
}
// // div.gallery img{
//     width: 100%;
//     height: 50%;
// }
  
div.desc{
    padding: 35px;
    text-align: center;
    width:100%;
}
.btn  {
  padding:10px;
  margin:5px;
}
  
  `
})
export class ViewBookComponent {

}
