import { Component, OnInit } from "@angular/core";
import { News } from "src/app/Models/news";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.css"]
})
export class NewsPageComponent implements OnInit {
  newss: News;
  title = "itechAngul";
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.spinner.show();
    this.http
      .get("https://localhost:44333/api/News/GetAllNews")
      .subscribe(result => {
        this.newss = <News>result;
        this.spinner.hide();
      });
  }
}
