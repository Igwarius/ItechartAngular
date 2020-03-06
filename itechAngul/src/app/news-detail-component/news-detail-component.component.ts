import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { map } from "rxjs/operators";
import { News } from "src/app/Models/news";
import { httpUrls } from "src/app/Constants/Urls";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-news-detail-component",
  templateUrl: "./news-detail-component.component.html",
  styleUrls: ["./news-detail-component.component.css"]
})
export class NewsDetailComponentComponent implements OnInit {
  @Input() news: News;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  id: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(httpUrls.USERBYID_CONST + this.id);

    this.http.get(httpUrls.USERBYID_CONST + this.id).subscribe(result => {
      this.news = <News>result;
      this.spinner.hide();
    });
  }
}
