import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getAllBooks(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  private books = [
    {id:1,
      title:"Nexus",
      imgUrl:"https://odyssey.in/collections/books/products/nexus-from-the-multi-million-copy-bestselling-author-of-sapiens",
      description: "NEXUS: FROM THE MULTI-MILLION COPY BESTSELLING AUTHOR OF SAPIENS",
      // <button type="button" class="btn btn-warning">Save10%</button>
      price:990
    },
    {id: 2,
      title:"INDIAN PHILOSOPHY",
      imgUrl:"https://odyssey.in/collections/books/products/i-didnt-know-i-needed-this",
      description: "Raghavan Srinivasan",
      language:"Tamil",
      price:893
      },

      {id: 3,
        title:"BUSINESS SUSTAINABILITY",
        imgUrl:"https://odyssey.in/collections/books/products/business-sustainability",
        description: "HandBook",
        language:"Tamil",
        price:2000
        },
  

  ];
  getAllBook() {
    return this.books;
  }
  getBooksById(id:number) {
    const book= this.books.find(obj=> obj.id == id);
    return book;
  }

  getBookByTitle(title:string) {
    const selectedBook = this.books.find(obj=> obj.title == title);
    return selectedBook;

  }
  //Filter method returns []
  getBooksByLanguage(language:string) {
    const filteredBooks = this.books.filter(obj =>obj.language ==language);
    return filteredBooks;
  }
  getBookLessThanPrice(price:number){
    
  }
}
