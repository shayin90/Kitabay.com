import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor() { }

  private books = [
{id:1,
  title:"Ancient Chants",
  imgUrl:"https://odyssey.in/cdn/shop/files/ancientchants_300x.jpg?v=1731077702",
  description:"Ancient Chants for Modern Living",
  language:"English",
  price:213
},

{id:2,
  title:"Watching You",
  imgUrl:"https://odyssey.in/cdn/shop/files/WATCHING_300x.jpg?v=1731239080",
  description:"Watching You-Lisa Jewwll",
  language:"English",
  price:510
},

{id:3,
  title:"DayDream",
  imgUrl:"https://odyssey.in/cdn/shop/files/DAYDREAM_300x.jpg?v=1731240937",
  description:"Hannah Grace ",
  language:"English",
  price:424
},

{id: 4,
    title:"Nexus",
    imgUrl:"https://odyssey.in/cdn/shop/files/ANCIENT1_300x.jpg?v=1731077995",
    description: "Ancient Practices",
    language:"Tamil",
    price:990
  },
  
  {id: 4,
    title:"Jallikattu",
    imgUrl:"https://odyssey.in/cdn/shop/products/jallikattu-new-symbol-of-tamil-angst-1827716759590_300x.jpg?v=1604416663",
    description: "Jallikattu:New Symbol of Tamil Angst",
    language:"Tamil",
    price:336   
    },  
  
    {id: 6,
      title:"THE FIFTEEN",
      imgUrl:"https://odyssey.in/cdn/shop/files/fifteen_300x.jpg?v=1730037718",
      description: "The Fifteen",
      language:"English",
      price:680
      },
  
    {id: 7,
      title:"SIMPLY FLY",
      imgUrl:"https://odyssey.in/cdn/shop/files/simplyfly_300x.jpg?v=1730098959",
      description: "Captain Gopinath",
      language:"Tamil",
      price:540
       },
  
      {id: 8,
      title:"ONIX STORM",
      imgUrl:"https://odyssey.in/cdn/shop/files/ONYX_300x.jpg?v=1730039298",
      description: "Onyx Storm: DISCOVER THE FOLLOW-UP TO THE GLOBAL PHENOMENONS, FOURTH WING AND IRON FLAME!",
      language:"Tamil",
      price:1360
      },
  
      {id: 9,
      title:"Indian Philosophy",
      imgUrl:"https://odyssey.in/cdn/shop/files/philosophy_300x.jpg?v=1723194006",
      description: "INDIAN PHILOSOPHY",
      language:"Tamil",
      price:340
      },
  
      {id: 10,
        title:"Before We Forget Kindness",
        imgUrl:"https://odyssey.in/cdn/shop/files/before_300x.jpg?v=1712671421",
        description: "Toshikazu kawaguchi",
        language:"Tamil",
        price:510
        },  
      {id: 11,
          title:"Sick Business",
          imgUrl:"https://odyssey.in/cdn/shop/files/9789356997257_300x.jpg?v=1718889590",
          description: "SICK BUSINESS THE TRUTH BEHIND HEALTHCARE IN INDIA",
          language:"Tamil",
          price:340
         },  
        {id: 12,
            title:"Types of Wealth",
            imgUrl:"https://odyssey.in/cdn/shop/files/THE5TYPES_300x.jpg?v=1730040354",
            description: "The 5 Types of Wealth : A Transformative Guide to Design Your Dream Life Paperback – 4 February 2025",
            language:"Tamil",
            price:425
           },
          {id: 13,
              title:"Ikigai",
              imgUrl:"https://odyssey.in/cdn/shop/products/BK0103896_300x.jpg?v=1643976312",
              description: "",
              language:"Tamil",
              price:220
             
           },
           {id: 14,
            title:"Mannin Marabu",
            imgUrl:"https://odyssey.in/cdn/shop/products/the-tamil-landscape-culture-and-traditions-3560012513339_300x.jpg?v=1605024288",
            description: "The Tamil Landscape",
            language:"Tamil",
            price:280
           },  

           {id: 15,
            title:"Pirahu",
            imgUrl:"https://odyssey.in/cdn/shop/products/pirahu-modern-tamil-classic-novel-tamil-paperback-15857606885435_300x.jpg?v=1604627988",
            description: "Modern Tamil Classic Novel",
            language:"Tamil",
            price:129
           },
             {id: 16,
            title:"Hitler",
            imgUrl:"https://odyssey.in/cdn/shop/products/hitler-tamil-18412379209881_300x.jpg?v=1621872875",
            description: "Hitler Tamil",
            language:"Tamil",
            price:340
           },  
           {id: 17,
            title:"I Have a Dream",
            imgUrl:"https://odyssey.in/cdn/shop/products/i-have-a-dream-tamil-19397741641881_300x.jpg?v=1621875786",
            description: "Naan Kaanum Kanavu",
            language:"Tamil",
            price:180
           },  
           {id: 18,
            title:"MY Journey",
            imgUrl:"https://odyssey.in/cdn/shop/products/BK0008659_300x.jpg?v=1643975252",
            description: "எனது பயணம்: கனவுகளுக்குச் செயல்வடிவம் கொடுத்தல்",
            language:"Tamil",
            price:176
           },  
           

           
  ];
    getAllBooks() {
    return this.books;
  }
  getBookById(id:number) {
    const book= this.books.find(obj=> obj.id == id);
    return book;
  }

  getBookByTitle(title:string) {
    const selectedBook = this.books.find(obj=> obj.title == title);
    return selectedBook;

  }
  //Filter method returns []
  getBooksByLanguage(language: string) {
    const filteredBooks = this.books.filter(obj =>obj.language ==language);
    return filteredBooks;
  }
  getBooksLessThanPrice(price:number){
    
  }
  
}



