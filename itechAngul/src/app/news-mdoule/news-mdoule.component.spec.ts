import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMdouleComponent } from './news-mdoule.component';

describe('NewsMdouleComponent', () => {
	let component: NewsMdouleComponent;
	let fixture: ComponentFixture<NewsMdouleComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ NewsMdouleComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsMdouleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
