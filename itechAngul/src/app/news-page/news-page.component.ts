import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/Models/news';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Categories } from '../Models/categories';
import { SubCategories } from 'src/app/Models/subCategories';
import { httpUrls } from 'src/app/Constants/Urls';
import { NewsWithCategories } from '../Models/newsWithCategories';
@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: [ './news-page.component.css' ]
})
export class NewsPageComponent implements OnInit {
	header: string;
	showSubCatgory: boolean;
	subCategory: SubCategories;
	news: News;
	categories: Categories;
	newsWithCategories: NewsWithCategories;
	title = 'itechAngul';
	constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
	ngOnInit() {
		this.showSubCatgory = false;
		this.header = 'Новости';
		this.spinner.show();
		this.http.get(httpUrls.NEWS_WITH_CATEGORY).subscribe((result) => {
			this.newsWithCategories = <NewsWithCategories>result;
			this.news = this.newsWithCategories.news;
			this.categories = this.newsWithCategories.categories;
			this.spinner.hide();
		});
	}
	onSubSelect(subCategory: SubCategories): void {
		this.spinner.show();
		this.http.get(httpUrls.NEWS_BY_SUBCATEGORY + subCategory.id).subscribe((result) => {
			this.news = <News>result;
			this.header = subCategory.name;
			this.spinner.hide();
		});
	}
	onSortDate(): void {
		this.spinner.show();
		this.http.get(httpUrls.NEWS_BY_DATE).subscribe((result) => {
			this.news = <News>result;
			this.spinner.hide();
		});
	}
	onSortView(): void {
		this.spinner.show();
		this.http.get(httpUrls.NEWS_BY_VIEW).subscribe((result) => {
			this.news = <News>result;
			this.spinner.hide();
		});
	}

	onSelect(categori: Categories): void {
		this.spinner.show();
		this.http.get(httpUrls.NEWS_BY_CATEGORY + categori.id).subscribe((result) => {
			this.news = <News>result;
			this.header = categori.name;
			this.spinner.hide();
		});

		this.http.get(httpUrls.SUB_CATEGORY_BY_CATEGORY + categori.id).subscribe((result) => {
			this.subCategory = <SubCategories>result;
			this.showSubCatgory = true;

			this.spinner.hide();
		});
	}
}
