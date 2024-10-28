import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BooksService } from '../books.service';
import { BookCardComponent } from "../components/book-card/book-card.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, BookCardComponent],
  templateUrl: './books-list.component.html',
  styles: ``
})
export class BooksListComponent implements OnInit {
  book!: any[];
  
  language!: string;
 
  bookType!:string;
   
  price!: number;

  minPrice!: number;

  maxPrice!: number;

  Loading: any;

  constructor(private booksService: BooksService) {
    console.log(BooksListComponent);

  }
ngOnInit(): void {
  console.log("OnInit method called");
  this.book= this. booksService.getAllBooks();
  console.log('book', this.book);
}
reset() {
  this.book= this.booksService.getAllBooks();
}
applyFilter() {
  alert("language:" +this.language);
  alert("booktype" + this.bookType);
  alert(("price:" +this.minPrice +  "-" + this.maxPrice));

  if (this.language) {

  
    this.book = this.book.filter(obj=> obj.language == this.language);
  }

  //if bookType is selected
  if (this.bookType) {
    this.book = this.book.filter(obj=> obj.description.includes(this.bookType))
  }
//if price filter is applied 

if (this.bookType) {
  this.book = this.book.filter(obj =>obj.price > this.minPrice && obj.price <=this.maxPrice);
  console.log('price.filter');
  console.table('this.book');
}
    
}
}


























// books!: any[];
// bookType!: string;
// price!: number;
// offerPrice!: number;
// Loading: any;
//   booksService: any;
//   title: string;

// constructor() {
//   console.log(BooksListComponent);
// }
//   ngOnInit(): void {
//     console.log("OnInit Method called");
//     this.books = this.booksService.getAllBooks();
//     console.log('books',this.books)
//   }
//   reset() {
//     this.books = this.booksService.getAllBooks();
//   }
//   applyFilter() {
//     alert("title:" +this.title);
//     alert("price:" + this.price);
//     alert("offerPrice:" + this.offerPrice);

//     if (this.title) {
//       this.books = this.books.filter(obj => obj.title == this.title);
//     }
//     //if booktype is selected
//     if (this.price) {
//       this.books =this.books.filter(obj=> obj.price.includes == this.price );
//     }
//     if (this.offerPrice) {
//       this.books = this.books.filter(obj => obj.offerPriceprice.includes == this.offerPrice);
//     }


//   }