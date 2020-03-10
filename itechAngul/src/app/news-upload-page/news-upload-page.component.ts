import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { News } from "src/app/Models/news";
import { Catigories } from "src/app/Models/categories";
import { SubCatigories } from "src/app/Models/subCatigories";
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
  public catigories: Catigories;
  public subcatigories: SubCatigories;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      image: new FormControl(""),
      subcategoryid: new FormControl(0)
    });

    this.http.get(httpUrls.SubCategory).subscribe(result => {
      this.subcatigories = <SubCatigories>result;
    });
  }
  createNews() {
    const news = <News>this.form.value;

    news.viewers = 1;
    console.log(news);
    debugger;
    this.http.post(httpUrls.AddNews, news).subscribe();
  }
}
