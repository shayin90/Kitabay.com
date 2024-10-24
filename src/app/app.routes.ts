import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RegisterComponent } from './register/register.component';
import { BooksListComponent } from './books-list/books-list.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'header',component:HeaderComponent},
    {path:'login',component:LoginComponent},
    {path:'view-book',component:ViewBookComponent},
    {path:'register',component:RegisterComponent},
    {path:'books', component:BooksListComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
