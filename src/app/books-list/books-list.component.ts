import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BooksService } from '../books.service';
import { BookCardComponent } from "../components/book-card/book-card.component";
import { PageComponent } from "../components/page/page.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, BookCardComponent, PageComponent],
  templateUrl: './books-list.component.html',
  styles: `
  .col-3 {
    margin-right:5px;
    float:left;
    padding:10px;
   margin:40px;
  // //  box-sizing:border-box;
  //  border:1px solid grey;
//  margin-top:15px;

  }
  `
})
export class BooksListComponent implements OnInit {

  books!: any[];
  
  language!: string;
 
  bookType!: string;
   
  price!: number;

  minPrice!: number;

  maxPrice!: number;

  Loading: any;

  constructor(private booksService: BooksService) {
    console.log(BooksListComponent);

  }
ngOnInit(): void {
  console.log("OnInit method called");
  this.books = this .booksService.getAllBooks();
  console.log('book', this.books);
}
reset() {
  this.books= this.booksService.getAllBooks();
}
applyFilter() {
  alert("language:" +this.language);
  alert("booktype" + this.bookType);
  alert(("price:" +this.minPrice +  "-" + this.maxPrice));

  if (this.language) {

  
    this.books= this.books.filter(obj=> obj.language == this.language);
  }

  //if bookType is selected
  if (this.bookType) {
    this.books = this.books.filter(obj=> obj.description.includes(this.bookType))
  }
//if price filter is applied 

   if(this.minPrice && this.maxPrice) {
      this.books = this.books.filter(obj => obj.price > this.minPrice && obj.price <=this.maxPrice);
      console.log('price filter');
      console.table('this.books');
    
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