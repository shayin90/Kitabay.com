import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header1',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header1.component.html',
  styles: `
  
// .navbar-brand1{
//   margin:5px;
//  align-items:center;
//  float:right;
//  width:100%;
//  height:50px;
//  background-color:#e3f0d3 ;
//  color:#0b14de ;
//  padding:10px;
 
// }
// .navbar-brand{
//  transition:.2s;
//  background-color:green;
//  padding: 5px;
//  box-shadow: 2px 5px 3px 2px #d1f0aa ;
//  margin-left:35px;
//  position:absolute;
//  border-radius:20% ;

// }

// .container-fluid {
//  padding:10px;
//  position: relative;
// }

// .container{
//  margin-left:50px;
// }

// .form__icon {
// position: absolute;
// pointer-events: none;
// z-index: 2;
// padding:22px;

// }
// .form__input {
// position: relative;
// z-index: 3;
// width:40%;
// height:55px;

// border:2px solid green;
// }
// .form__input:placeholder-shown {
// z-index: 1;
// padding:20px;
// }
// .nav-link {
// padding:10px;
// color:#135f23 ;
// margin:5px;
// font-weight:600;
// }
// .nav-item{
// list-style:none;
// margin-left:10px;

// }
// form.example button:hover {
// background: #ccc;
// color:black;
// }

/* Clear floats */
// form.example::after {
// content: "";
// clear: both;
// display: table;
// }
// form.example input[type=text] {
// padding: 50px;
// font-size: 17px;
// border: 1px solid green;
// float: right;
// width: 40%;
// background: #f1f1f1;
// height:50px;
// display: block;
// margin-left: auto;


// }
#navbar{
  padding:20px;
  margin-right:30px;
  overflow: hidden;
  transition: 0.2s;
  position: fixed;
  width: 100%;
  top: 0;
  // z-index: 99;
  }
  
#navbar a:hover{
  transition: 0.4s;
  
}
h2{
  font-family: Arial, Helvetica, sans-serif;
}
#navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}  

#navbar a.active {
  background-color: dodgerblue;
  color: white;
}
#navbar-right {
  float: right;
}

  `
})
export class Header1Component implements OnInit {
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
