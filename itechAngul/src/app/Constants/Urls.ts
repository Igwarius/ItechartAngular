import { domain } from "src/app/Constants/domain";
export const httpUrls = {
  SIGN_IN: domain.MAIN_DOMAIN + "api/User/SignIn",
  ALL_NEWS: domain.MAIN_DOMAIN + "api/News/News",
  ALL_CATEGORIES: domain.MAIN_DOMAIN + "api/News/Categories",
  NEWS_BY_SUBCATEGORY: domain.MAIN_DOMAIN + "api/News/NewsBySubCategory/",
  NEWS_BY_DATE: domain.MAIN_DOMAIN + "api/News/SortNews/0",
  NEWS_BY_VIEW: domain.MAIN_DOMAIN + "api/News/SortNews/1",
  NEWS_BY_CATEGORY: domain.MAIN_DOMAIN + "api/News/NewsByCategory/",
  SUB_CATEGORY_BY_CATEGORY:
    domain.MAIN_DOMAIN + "api/News/SubCategoryByCategory/",
  SUB_CATEGORY: domain.MAIN_DOMAIN + "api/News/SubCategories",
  ADD_NEWS: domain.MAIN_DOMAIN + "api/News/News",
  ADDUSER_CONST: domain.MAIN_DOMAIN + "api/User/User",
  USER_BY_ID: domain.MAIN_DOMAIN + "api/News/News/"
};
