import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-news-upload-page",
  templateUrl: "./news-upload-page.component.html",
  styleUrls: ["./news-upload-page.component.css"]
})
export class NewsUploadPageComponent implements OnInit {
  public form: FormGroup;
  public news: News;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      image: new FormControl("")
    });
  }
  createNews() {
    const news = <News>this.form.value;

    news.viewers = 0;
    console.log(news);
    debugger;
    this.http
      .post("https://localhost:44333/api/News/AddNews", news)
      .subscribe();
  }
}
