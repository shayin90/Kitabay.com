import { Component } from '@angular/core';

@Component({
  selector: 'app-books-category-list',
  standalone: true,
  imports: [],
  templateUrl: './books-category-list.component.html',
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
  cursor:pointer;
}
h3{
  color:blue;
  text-align:center;
  padding:15px;
  box-shadow:5px 5px 10px #888888;

}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

/* The grid: Four equal columns that floats next to each other */
.coloumn {
  float: left;
  width: 25%;
  padding: 10px;
  // box-shadow:5px 5px 10px #888888;
  transition:5px;
  border-radius:8px;
  box-shadow: 1px 2px 3px 2px rgb(96, 67, 84);
}
.coloumn a:hover{
  background-color:grey;
 


}

/* Style the images inside the grid */
.column img {
  opacity: 0.8; 
  cursor: pointer; 
  float:left;
  
}

.column img:hover {
  opacity: 1;
  box-shadow:5px 5px 10px #888888;
    transition:5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
`
})
export class BooksCategoryListComponent {

}
