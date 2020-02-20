import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-news-upload-page",
  templateUrl: "./news-upload-page.component.html",
  styleUrls: ["./news-upload-page.component.css"]
})
export class NewsUploadPageComponent implements OnInit {
  public form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({ imageUrl: new FormControl("") });
  }
}
