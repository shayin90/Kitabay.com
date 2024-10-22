import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
email!: string;
password!: string;


constructor (private readonly toastr: ToastrService) {
  console.log('LoginComponent');
}
onSubmit() {

  console.log('Form Sumitted');
  
  console.log('Email:' ,this.email, 'Password:' +this.password);
//Backend API URL (data:email,password)
  // if admin@gmail.com ,pass1234 , valid login
//If (this.email == "admin@gmail.com", password =="pass1234")

//1.Fetch the registered user details from local storage
  const userStr =localStorage.getItem("USERS");

  let users= [];
  if (userStr) {
    users= JSON.parse (userStr);
  }else{
    users = [];
  }

const userExits = users.find((obj:any) => obj.email == this.email && obj.password == this.password);
if (userExits !=null) {
  //alert ("Successfull loggedin ")
    this.toastr.warning("Successfully Loggedin"); //new
    localStorage.setItem("Logged_IN_USER","true");
    localStorage.setItem("EMAIL",this.email);
    
  }else{
    this.toastr.info("Invalid Login Credentials");
    window.location.href = "/home";
  }
 }
}
