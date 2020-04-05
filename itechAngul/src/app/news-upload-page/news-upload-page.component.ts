import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { Categories } from "src/app/Models/categories";
import { SubCategories } from "src/app/Models/subCategories";
import { ActivatedRoute } from "@angular/router";
import { httpUrls } from "src/app/Constants/Urls";
import * as jwt_decode from 'jwt-decode';
import { Router } from "@angular/router";
@Component({
  selector: "app-news-upload-page",
  templateUrl: "./news-upload-page.component.html",
  styleUrls: ["./news-upload-page.component.css"]
})
export class NewsUploadPageComponent implements OnInit {
  public form: FormGroup;
  public news: News;
  public categories: Categories;
  public subcategories: SubCategories;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    try{
      var decoded =  jwt_decode(localStorage.Access_token); 
      }
      catch{
        this.router.navigate(["/news"]);
      }
      if ((decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=="User"))
   
      this.router.navigate(["/news"]);
    var decoded =  jwt_decode(localStorage.Access_token); 
    console.log(decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
    if (decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=="User")
    this.router.navigate(["/news"]);
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      image: new FormControl(""),
      subcategoryid: new FormControl(0)
    });

    this.http.get(httpUrls.SUB_CATEGORY).subscribe(result => {
      this.subcategories = <SubCategories>result;
    });
  }
  createNews() {
    const news = <News>this.form.value;

    news.viewers = 1;
   
    this.http.post(httpUrls.ADD_NEWS, news).subscribe();
  }
}
