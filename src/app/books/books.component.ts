import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styles: `
.container-fluid {
  box-sizing:border-box;
  border:1px solid #ccc;
  width:90%;
  height:25%;

}
 p{
    color:blue;
    margin:5px;
  }
  .title{
    padding:10px;
  }
  
  .container .btn {
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: white;
  font-size: 16px;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: black;
}
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 23.33%;
  padding: 10px;
  height:500px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
  box-sizing:border-box;
  border:1px solid #ccc;
}
.container .img {
  box-sizing:border-box;
  border:2px solid #ccc;
  height:500px;
  width:150px;
  float:left;
  
}


`
})
export class BooksComponent {
books:any=[
  {
    "id" :1,
    "title" : "nexus",
    "price": 500,
    "discountedPrice": 400,
    "discountPercentage": 20,
    "imgURL": "https://odyssey.in/cdn/shop/files/9781464243868_500x.jpg?v=1730286300",
  },

  {
    "id" :2,
    "title" : "Kill gandhi",
    "price": 500,
    "discountedPrice": 400,
    "imgURL": "https://odyssey.in/cdn/shop/products/sddf_500x.jpg?v=1633177458",
  },

  {
    "id" :3,
    "title" : "Kutti Kathaigal",
    "price": 198,
    "discountedPrice": 180,
    "imgURL": "https://odyssey.in/cdn/shop/files/9789348561763_300x.jpg?v=1733214190",
  },

  {
    "id" :4,
    "title" : "Orbital",
    "price": 0,
    "discountedPrice": 468,
    "imgURL": "https://odyssey.in/cdn/shop/files/ORBITAL_300x.jpg?v=1732457329",
  }


]
}
