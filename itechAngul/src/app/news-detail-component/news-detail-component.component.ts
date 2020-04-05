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
import { NewsWithComments } from '../Models/newsWithComments';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: "app-news-detail-component",
  templateUrl: "./news-detail-component.component.html",
  styleUrls: ["./news-detail-component.component.css"]
})
export class NewsDetailComponentComponent implements OnInit {
  public form: FormGroup;
  public id: string;
  @Input() news: News;
  comment: Comment;
  newsWithComments:NewsWithComments;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl("")
    });
    this.id = this.route.snapshot.paramMap.get("id");
    this.http.get(httpUrls.ADD_VIEWS + this.id).subscribe(result => {});
    this.http.get(httpUrls.FULL_NEWS + this.id).subscribe(result => {
    this.newsWithComments=<NewsWithComments>result;
    this.news = this.newsWithComments.news;
    this.comment =this.newsWithComments.comment;
    this.spinner.hide();
    });
  }
  createComment() {
    const comment = <Comment>this.form.value;
    comment.likesCount = 0;
    var decoded =  jwt_decode(localStorage.Access_token); 
   
    comment.login = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    comment.newsId = +this.id;
    this.http.post(httpUrls.ADD_COMMENTS, comment).subscribe(() => {
      window.location.reload();
    });
  }
}
