import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewsDetailComponentComponent } from "./news-detail-component.component";

describe("NewsDetailComponentComponent", () => {
  let component: NewsDetailComponentComponent;
  let fixture: ComponentFixture<NewsDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetailComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
