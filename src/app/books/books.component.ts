import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styles: `
  .breadcrumb-item{
    color:blue;
  }
  
.coloumn {
  float: left;
  
  padding: 10px;
}
.coloumn img {
  opacity: 0.8;
  cursor: pointer;
  width: 450px;
  height:350px;
  }

.coloumn img:hover {
  opacity: 1;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
  h5{
  color:blue;
  text-align:left;
  padding:20px;
  margin:15px;
}
h3{
  color:blue;
  text-align:center;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

/* The grid: Four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.column img {
  opacity: 0.8; 
  cursor: pointer; 
  float:left;
}

.column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

`
})
export class BooksComponent {

}
