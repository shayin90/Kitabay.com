import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RegisterComponent } from './register/register.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { BooksCategoryListComponent } from './books-category-list/books-category-list.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'books', component:BooksListComponent},
    {path:'books/:id',component:ViewBookComponent},
    {path:'login',component:LoginComponent},    
    {path:'register',component:RegisterComponent},   
    {path:'cart',component:CartComponent},
    {path:'book',component:BooksComponent},
    {path:'categories',component:BooksCategoryListComponent},
    {path:'profile',component:ProfileeditComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
