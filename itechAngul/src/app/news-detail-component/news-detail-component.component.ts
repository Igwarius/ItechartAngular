import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { map } from "rxjs/operators";
import { News } from "src/app/Models/news";
import { httpUrls } from "src/app/Constants/Urls";
import { HttpClient } from "@angular/common/http";
import { Comment } from "src/app/Models/comment";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-news-detail-component",
  templateUrl: "./news-detail-component.component.html",
  styleUrls: ["./news-detail-component.component.css"]
})
export class NewsDetailComponentComponent implements OnInit {
  public form: FormGroup;
  @Input() news: News;
  comments: Comment;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  id: string;
  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl("")
    });
    this.id = this.route.snapshot.paramMap.get("id");

    this.http.get(httpUrls.NEWS_BY_ID + this.id).subscribe(result => {
      this.news = <News>result;
      this.spinner.hide();
    });
    this.http.get(httpUrls.COMMENTS_FOR_NEWS + this.id).subscribe(result => {
      this.comments = <Comment>result;
    });
  }
  createComment() {
    const comment = <Comment>this.form.value;

    comment.likes = 0;
    comment.login = localStorage.Login;
    comment.newsId = +this.id;
    console.log(comment);
    debugger;
    this.http.post(httpUrls.ADD_COMMENTS, comment).subscribe();
    window.location.reload();
  }
}
