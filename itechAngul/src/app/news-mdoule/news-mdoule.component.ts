import { Component, OnInit, Input } from "@angular/core";
import { News } from "src/app/Models/news";
@Component({
  selector: "app-news-mdoule",
  templateUrl: "./news-mdoule.component.html",
  styleUrls: ["./news-mdoule.component.css"]
})
export class NewsMdouleComponent implements OnInit {
  constructor() {}
  @Input() news: News;

  ngOnInit(): void {}
  onSelect(newss: News): void {
    console.log(newss.id);
  }
}
