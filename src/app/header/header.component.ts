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
  .container-fluid{
    background-color:#800000;
    color:#FFFFFF;
    text-weight:1000;
    list-style:none;
    padding:15px;
  }
  .dropdown-menu{
    color:#00F;
font-weight:500;
    padding:10px;
    margin:10px;
  }
  .nav-item dropdown{
    color:#FFFFFF;
    padding:15px;
    // text-weight:500;
  }
  .navbar-brand{
    transition:.1s;
    background-color:green;
    padding: 5px;
    box-shadow: 1px 5px 3px 2px white;
    border radius:5px;
    margin:10px;

  }
 .container.example {
    width:250px;
    margin:250px;
  }
 * {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 50%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 5%;
  padding: 10px;
  background: black;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
.nav-link {
  padding:10px;
  color:#ffF;
  margin:60px;
  
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
