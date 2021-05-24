import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
accnum="Enter Your Account Number";
pswd="";
uname="";
aim="Your Perfect Banking Partner"

constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  //alert("Registration Successful");
  var accno=this.accnum;
  var password=this.pswd;
  var name=this.uname;
  var result=this.ds.register(name,accno,password)
  if(result){
    alert("Registration Successful");
    this.router.navigateByUrl("");
  }
  else{
    alert("User already exists. Please Login!!!")
  }
    }
}
