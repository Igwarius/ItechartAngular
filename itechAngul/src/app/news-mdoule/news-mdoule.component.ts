import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/Models/news';
import { Router } from '@angular/router';
@Component({
	selector: 'app-news-mdoule',
	templateUrl: './news-mdoule.component.html',
	styleUrls: [ './news-mdoule.component.css' ]
})
export class NewsMdouleComponent implements OnInit {
	constructor(private router: Router) {}
	@Input() news: News;

	ngOnInit(): void {}
	onSelect(item: News): void {
		this.router.navigate([ '/curnews/' + item.id ]);
	}
}
