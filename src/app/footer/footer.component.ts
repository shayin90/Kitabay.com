import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body{
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
	
}
.row{
	display: flex;
	flex-wrap: wrap;
    padding:10px;
}
ul{
	list-style: none;
}
.footer{
	background-color:#d0d3d4  ;
    padding: 50px 0;
	align-items:left;
  max-width: 90%;
	margin:10px;
  height:280px;

}
.footer-col{
   width: 25%;
   padding: 0 15px;
   
}
.footer-col h4{
	font-size: 18px;
	color: #0d3feb;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #0d3feb;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #2267b0 ;
	text-decoration: none;
	font-weight: 300;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #0d3feb;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}

  
  `
})
export class FooterComponent {

}
