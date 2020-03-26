import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { Categories } from "src/app/Models/categories";
import { SubCategories } from "src/app/Models/subCategories";
import { ActivatedRoute } from "@angular/router";
import { httpUrls } from "src/app/Constants/Urls";
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
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
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
    console.log(news);
    debugger;
    this.http.post(httpUrls.ADD_NEWS, news).subscribe();
  }
}
