import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent implements OnInit {
   regForm! : FormGroup;
// name!: string;
// email!:string;
// password!:string;
// onSubmit:any;
 
constructor(private toastr: ToastrService,private fb:FormBuilder) {
  console.log('RegisterComponent constructor called');
}
ngOnInit(): void {
//   this.regForm = new FormGroup ({
//     name:new FormControl('',[Validators.required]),
//     email: new FormControl('', [Validators.required,Validators.email]),
//  password:  new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),

  
//   });

this.regForm = this.fb.group({
name: ['',[Validators.required]],
email:['',[Validators.required,Validators.email]],
password: ['',Validators.minLength(8),Validators.maxLength(12)]

});    

}
get name() {
return this.regForm.controls["name"];
}
get email() {
  return this.regForm.controls["email"];
}
get password() {
  return this.regForm.controls["password"];
}
onSubmit() {
  console.log('Form Submitted');
  console.log("valid",this.regForm.valid);
  console.log('value',this.regForm.value);
  const userObj =this.regForm.value;
  console.log('UserObj:' ,userObj);

  if(this.regForm.invalid) {
    //alert (Please fill all the details);
    this.toastr.error("Please fill all the details");
  }else {
    const users =[];
    users.push(userObj);
    localStorage.setItem("USERS", JSON.stringify(users));
    this.toastr.success("Successfully Registered");
    window.location.href ="/login";
  }
}
}