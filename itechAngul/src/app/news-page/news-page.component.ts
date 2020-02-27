import { Component, OnInit } from "@angular/core";
import { News } from "src/app/Models/news";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Catigories } from "../Models/categories";
@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.css"]
})
export class NewsPageComponent implements OnInit {
  header: string;

  newss: News;
  catigories: Catigories;
  title = "itechAngul";
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.header = "Новости";
    this.spinner.show();
    this.http
      .get("https://localhost:44333/api/News/GetAllNews")
      .subscribe(result => {
        this.newss = <News>result;
        this.spinner.hide();
      });
    this.http
      .get("https://localhost:44333/api/News/GetAllCategories")
      .subscribe(result => {
        this.catigories = <Catigories>result;
      });
  }
  onSelect(categori: Catigories): void {
    console.log(categori.id);
    this.spinner.show();
    this.http
      .get("https://localhost:44333/api/News/GetNewsByCategory/" + categori.id)
      .subscribe(result => {
        this.newss = <News>result;
        this.header = categori.name;
        this.spinner.hide();
      });
  }
}
