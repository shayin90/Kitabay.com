import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BadgeComponent } from "../components/badge/badge.component";
import { PageComponent } from '../components/page/page.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, BadgeComponent,PageComponent],
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
export class ViewBookComponent implements OnInit {
bookId!: number;
book:any;
constructor(private route: ActivatedRoute, private booksService: BooksService) {
  this.bookId = this.route.snapshot.params["id"];
}
  ngOnInit(): void {
//this.movie = this.book.find(obj => obj.title == this.bookName); 
//Find the 1st matched  element ;
this.book = this.booksService.getBooksById(this.bookId);
  }
addToCart(book:any) {
  //create empty array always
  //const cartItems = [];
  // 1.find existing cart items and add item in that list 
  const cartItemStr= localStorage.getItem("CART");
  const cartItems = cartItemStr  !=null ? JSON.parse(cartItemStr) : [];
  // const cartItems = cartItemStr !=null ? JSON.parse(cartItemStr) : [];
  cartItems.push(book);
  localStorage.setItem("CART" ,JSON.stringify(cartItems));
  alert("added items to cart");
  window.location.href="/cart";
}
}

// }

// 