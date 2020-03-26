import { Component, OnInit } from "@angular/core";
import { News } from "src/app/Models/news";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Categories } from "../Models/categories";
import { SubCategories } from "src/app/Models/subCategories";
import { httpUrls } from "src/app/Constants/Urls";
import { NewsWithCategories } from '../Models/newsWithCategories';
@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.css"]
})
export class NewsPageComponent implements OnInit {
  header: string;
  showSubCatgory: boolean;
  subCategori: SubCategories;
  newses: News;
  categories: Categories;
  newsWithCategories:NewsWithCategories 
  title = "itechAngul";
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.showSubCatgory = false;
    this.header = "Новости";
    this.spinner.show();
    this.http.get("https://localhost:44333/api/news/news-with-category").subscribe(result => {
      this.newsWithCategories=<NewsWithCategories>result;
    this.newses = this.newsWithCategories.news;
      this.categories = this.newsWithCategories.categories;
      console.log( this.newses);
      console.log(this.categories);
      debugger;
      this.spinner.hide();
    });

  }
  onSubSelect(subCatigori: SubCategories): void {
    this.spinner.show();
    this.http
      .get(httpUrls.NEWS_BY_SUBCATEGORY + subCatigori.id)
      .subscribe(result => {
        this.newses = <News>result;
        this.header = subCatigori.name;
        this.spinner.hide();
      });
  }
  onSortDate(): void {
    this.spinner.show();
    this.http.get(httpUrls.NEWS_BY_DATE).subscribe(result => {
      this.newses = <News>result;
      this.spinner.hide();
    });
  }
  onSortView(): void {
    this.spinner.show();
    this.http.get(httpUrls.NEWS_BY_VIEW).subscribe(result => {
      this.newses = <News>result;
      this.spinner.hide();
    });
  }

  onSelect(categori: Categories): void {
    console.log(categori.id);
    this.spinner.show();
    this.http.get(httpUrls.NEWS_BY_CATEGORY + categori.id).subscribe(result => {
      this.newses = <News>result;
      this.header = categori.name;
      this.spinner.hide();
    });
    this.http
      .get(httpUrls.SUB_CATEGORY_BY_CATEGORY + categori.id)
      .subscribe(result => {
        this.subCategori = <SubCategories>result;
        this.showSubCatgory = true;
        this.spinner.hide();
      });
  }
}
