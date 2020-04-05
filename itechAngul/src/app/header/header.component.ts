import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  isLog:boolean;
  ngOnInit(): void {
    if(localStorage.getItem("Login")==null)
    this.isLog=false;
    else this.isLog=true;
  }

  exit():void{
localStorage.clear();
this.isLog=false;
  }
enter():void{
  this.router.navigate(["/login"]);
}
news():void{
  this.router.navigate(["/news"]);
}
registration():void{
  this.router.navigate(["/registration"]);
}
}
