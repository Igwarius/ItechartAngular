import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "src/app/Models/comment";
@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit(): void {}
}
