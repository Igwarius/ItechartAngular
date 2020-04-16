import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/Models/comment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/Models/news';
import { User } from 'src/app/Models/user';
import { Categories } from 'src/app/Models/categories';
import { SubCategories } from 'src/app/Models/subCategories';
import { ActivatedRoute } from '@angular/router';
import { httpUrls } from 'src/app/Constants/Urls';
import { BannedUser } from 'src/app/Models/bannedUser';
import { from } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Like } from 'src/app/Models/Like';
import{differentConsts} from 'src/app/Constants/differentConsts'

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ]
})
export class CommentComponent implements OnInit {
	@Input() comment: Comment;
	like: Like;
	isUnLiked: boolean;
	isLiked: boolean;
	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
	liked(): void {
		var decoded = jwt_decode(localStorage.Access_token);
		this.http
			.get(
				httpUrls.POST_LIKE +
					decoded[differentConsts.NAME_FROM_TOKEN] +
					'/' +
					this.comment.id
			)
			.subscribe((result) => {});
		this.isLiked = true;
		this.isUnLiked = false;
	}
	unLiked(): void {
		var decoded = jwt_decode(localStorage.Access_token);
		this.http
			.delete(
				httpUrls.GET_LIKE +
					decoded[differentConsts.NAME_FROM_TOKEN] +
					'/' +
					this.comment.id
			)
			.subscribe((result) => {});
		this.isUnLiked = true;
		this.isLiked = false;
	}
	isEmpty(like) {
		for (let key in like) {
			return false;
		}
		return true;
	}
	ngOnInit(): void {
		var decoded = jwt_decode(localStorage.Access_token);
		this.http
			.get(
				httpUrls.GET_LIKE +
					decoded[differentConsts.NAME_FROM_TOKEN] +
					'/' +
					this.comment.id
			)
			.subscribe((result) => {
				this.like = <Like>result;
				if (this.isEmpty(this.like)) {
					this.isLiked = false;
				} else {
					this.isLiked = true;
				}
			});
	}
}
