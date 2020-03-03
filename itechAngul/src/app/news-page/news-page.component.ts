import { Component, OnInit } from "@angular/core";
import { News } from "src/app/Models/news";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Catigories } from "../Models/categories";
import { SubCatigories } from "src/app/Models/subCatigories";
@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.css"]
})
export class NewsPageComponent implements OnInit {
  header: string;
  showSubCatgory: boolean;
  subCatigori: SubCatigories;
  newss: News;
  catigories: Catigories;
  title = "itechAngul";
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.showSubCatgory = false;
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
  onSubSelect(subCatigori: SubCatigories): void {
    this.spinner.show();
    this.http
      .get(
        "https://localhost:44333/api/News/GetNewsBySubCategory/" +
          subCatigori.id
      )
      .subscribe(result => {
        this.newss = <News>result;
        this.header = subCatigori.name;
        this.spinner.hide();
      });
  }
  onSortDate(): void {
    this.spinner.show();
    this.http
      .get("https://localhost:44333/api/News/GetSortNews/date")
      .subscribe(result => {
        this.newss = <News>result;
        this.spinner.hide();
      });
  }
  onSortView(): void {
    this.spinner.show();
    this.http
      .get("https://localhost:44333/api/News/GetSortNews/view")
      .subscribe(result => {
        this.newss = <News>result;
        this.spinner.hide();
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
    this.http
      .get(
        "https://localhost:44333/api/News/GetSubCategoryByCategory/" +
          categori.id
      )
      .subscribe(result => {
        this.subCatigori = <SubCatigories>result;
        this.showSubCatgory = true;
        this.spinner.hide();
      });
  }
}
