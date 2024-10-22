import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: `
  h3{
    color:blue;
    text-align:15%;
    padding:20px;
    margin:15px;
  }
  .gallery{
    margin:25px;

  
  }
  div.gallery {
  margin: 50px;
  border: 4px solid #b9a1a1;
  float: left;
  width: 180px;
  height: 250px;
  
}

div.gallery:hover {
  border: 4px solid #777;
  
}

div.gallery img {
  width: 100%;
  height: 80%;
  // border-radius:60%;
}

div.desc {
  padding: 25px;
  text-align: center;
  color:blue;
}
.carousel-item{
  width:70%;
  padding:10px;
  margin:120px;
}
.grid-container {
  // box-sizing:border-box;
  // border:1px solid grey;
  display: grid;
  grid-template-columns: 1fr 3fr; /* Sidebar takes 1/4, Content takes 3/4 of the width */
  grid-template-rows: auto 1fr auto; /* Header and Footer auto-sized, Content takes up the rest */
height: 800px; /* Minimum height of viewport */
width:100%;
padding:20px;
margin:10px;


}
.body{
  padding:
  55px;
  width:55%;
  height:550px;

}
.header {
  grid-column: 1 / 3; /* Spanning across both columns */
  background-color: white;
  color: blue;
  padding: 30px;
}

.sidebar {
  // background-color: #f4f4f4;
  padding: 30px;
  color:blue;
  width:60%;
}

.content {
  background-color: #eaeaea;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width:55%;
  height:550px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu ul li {
  display: inline;
  margin-right: 10px;
}

.menu ul li a {
  text-decoration: none;
  color: #333;
}
h6{
  color:red;
}
  
  `
})
export class HomeComponent {

}
