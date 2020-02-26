import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { Catigories } from "src/app/Models/categories";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-news-upload-page",
  templateUrl: "./news-upload-page.component.html",
  styleUrls: ["./news-upload-page.component.css"]
})
export class NewsUploadPageComponent implements OnInit {
  public form: FormGroup;
  public news: News;
  public catigories: Catigories;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      image: new FormControl(""),
      categoryID: new FormControl(0)
    });

    this.http
      .get("https://localhost:44333/api/News/GetAllCategories")
      .subscribe(result => {
        this.catigories = <Catigories>result;
      });
  }
  createNews() {
    const news = <News>this.form.value;

    news.viewers = 1;
    console.log(news);
    debugger;
    this.http
      .post("https://localhost:44333/api/News/AddNews", news)
      .subscribe();
  }
}
