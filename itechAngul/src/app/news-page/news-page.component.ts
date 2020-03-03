import { Component, OnInit } from "@angular/core";
import { News } from "src/app/Models/news";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Catigories } from "../Models/categories";
import { SubCatigories } from "src/app/Models/subCatigories";
import { httpUrls } from "src/app/Constants/Urls";
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
    this.http.get(httpUrls.AllNews).subscribe(result => {
      this.newss = <News>result;
      this.spinner.hide();
    });
    this.http.get(httpUrls.AllCategories).subscribe(result => {
      this.catigories = <Catigories>result;
    });
  }
  onSubSelect(subCatigori: SubCatigories): void {
    this.spinner.show();
    this.http
      .get(httpUrls.NewsBySubCategory + subCatigori.id)
      .subscribe(result => {
        this.newss = <News>result;
        this.header = subCatigori.name;
        this.spinner.hide();
      });
  }
  onSortDate(): void {
    this.spinner.show();
    this.http.get(httpUrls.NewsByDate).subscribe(result => {
      this.newss = <News>result;
      this.spinner.hide();
    });
  }
  onSortView(): void {
    this.spinner.show();
    this.http.get(httpUrls.NewsByView).subscribe(result => {
      this.newss = <News>result;
      this.spinner.hide();
    });
  }

  onSelect(categori: Catigories): void {
    console.log(categori.id);
    this.spinner.show();
    this.http.get(httpUrls.NewByCategory + categori.id).subscribe(result => {
      this.newss = <News>result;
      this.header = categori.name;
      this.spinner.hide();
    });
    this.http
      .get(httpUrls.SubCategoryByCategory + categori.id)
      .subscribe(result => {
        this.subCatigori = <SubCatigories>result;
        this.showSubCatgory = true;
        this.spinner.hide();
      });
  }
}
