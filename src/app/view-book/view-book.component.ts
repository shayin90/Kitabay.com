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
  imports: [CommonModule, RouterLink, FormsModule, BadgeComponent],
  templateUrl: './view-book.component.html',
  styles: `
  
  .container-fluid{
    box-sizing:border-box;    
    width:1000px;
    // height:800px;
    padding:5px;
    margin:100px;
    // background-color:#225be8;
    color:#fafbfc ;
  }
  .card-title{
    color:blue;
  }
  h1{
    color:#118033;
  }
  
.btn  {
  padding:10px;
  margin:5px;
}
  
  `
})
export class ViewBookComponent implements OnInit{
bookId!: number;
book:any;
constructor(private route: ActivatedRoute, private booksService: BooksService) {
  this.bookId = this.route.snapshot.params["id"];


}
ngOnInit(): void {


//this.book = this.book.find(obj => obj.title == this.bookName); 
//Find the 1st matched  element ;
this.book = this.booksService.getBookById(this.bookId);
  }

addToCart(book: any) {
  //create empty array always
  //const cartItems = [];
  // 1.find existing cart items and add item in that list 
const cartItemStr= localStorage.getItem("CART");
    const cartItems = cartItemStr  !=null ? JSON.parse(cartItemStr) : [];

  // {
  //   "id": book.id,
  //   "title":book.title,
  //   "price": book.price,
  //   "imgUrl":book.imgUrl,
  //   numberofbook:1
  // }
  //add item
  cartItems .push(book);
  //store in db
  localStorage.setItem("CART" ,JSON .stringify(cartItems));
  //redirect to cartpage
  alert("added items to Cart");
  window.location.href = "/cart";

}

}

