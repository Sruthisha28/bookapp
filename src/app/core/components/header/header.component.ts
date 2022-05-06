import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstname="";
  email="";
  phone="";



  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

loginForm=new FormGroup({
  firstname:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  phone:new FormControl('',Validators.required),



})






  login(){
    
alert("successfully logined")
this.router.navigateByUrl("add-category")
  }

}
