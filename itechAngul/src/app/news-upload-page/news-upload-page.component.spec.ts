import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUploadPageComponent } from './news-upload-page.component';

describe('NewsUploadPageComponent', () => {
	let component: NewsUploadPageComponent;
	let fixture: ComponentFixture<NewsUploadPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ NewsUploadPageComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsUploadPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
