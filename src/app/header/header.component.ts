import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styles: `

  * {
  box-sizing: border-box;
}
  h6{
    padding:10px;
    background-color:#acb7e0;
    color:#0b14de ;
  }
  .container-fluid{
    background-color:#96c49e    ;
    color:#FFFFFF;
    text-weight:1000;
    list-style:none;
    height:120px;
  }
  
  
  .navbar-brand{
    transition:.1s;
    padding: 5px;
    box-shadow: 15px 5px 10px 10px  white;
    margin:120px;
    width:150px;

  }
  .nav-link{
  color:#edeef2 ;
  margin:10px;
 font-weight:500;
text-align:center;
 width:100%;
height:10px;

  
}
/* Style the search field */
form.example input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: 1px solid black;
  float: left;
  width: 40%;
  background: #f1f1f1;
  border-radius:20px;
  margin-left:200px;
}


  `
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;//default false

  constructor(private toastr: ToastrService) {
  
    console.log("HeaderComponent called"); 
  }
  ngOnInit(): void {
   //fetch items localstorage whether user is loggein
   this.isLoggedIn =  localStorage.getItem("Logged_IN-USER") == 'true';
    }
    logout(){
    // localStorage.removeItem("LOGGED_IN_USER");
    localStorage.clear();
    alert("Successfully LoggedOut !!!");
  window.location.href = "/login";
   }
}
