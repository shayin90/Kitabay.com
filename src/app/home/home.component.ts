import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from "../books-list/books-list.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BooksListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: `
.container-fluid  {
  padding:5px;
  float:left;
  margin:5px;
}
.carousel-inner{
 
}
.carousel-item {
  padding:30px;
  // width:100%;
  height:100%;
  padding:10px;
float:left;
}

.carousel-control-prev-icon {
  background-color:Black;
  margin-right:60px;
}
.carousel-control-next-icon {
  background-color:Black;
  margin-left:22px;
}
.btn{
  padding :15px;
  margin:10px;
  float:left;
}

.authors-zoom {
    float: left;
  width: 13.33%;
  padding: 15px;
  transition: transform .1s;
  margin: 0 auto;
}

.authors-zoom:hover {
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari 3-8 */
  transform: scale(1.5); 
}
div.gallery-2 {
  margin: 5px;
  float: left;
 
}
.gallery-2 img{
  border-radius: 50%;
  padding:5px;
  margin:15PX;

}

.carousel-inner1{
    box-sizing:border-box;
    
    width:1400px;
    height:450px;
    padding:5px;
    margin:60px;
    background-color:#befcf6  ;
    color:#0d3feb ;
  }
  .carousel-inner1 .gallery{
    padding:10px;
    margin:30px;
  height:220px;
  }
  div.gallery {
  margin: 20px;
  border: 2px solid #b9a1a1;
  float: left;
  width: 180px;
  // height: 250px;
}
div.gallery:hover{
    border:4px solid #19814b ;
}
  
div.desc{
    padding: 35px;
    text-align: center;
  
}
.fs-4{
  color:#145a32 ;

}


  `
})
export class HomeComponent {

}
