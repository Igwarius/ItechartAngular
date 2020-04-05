import { domain } from "src/app/Constants/domain";
export const httpUrls = {
  SIGN_IN: domain.MAIN_DOMAIN + "user/sign-in",
  ALL_NEWS: domain.MAIN_DOMAIN + "news/news",
  ALL_CATEGORIES: domain.MAIN_DOMAIN + "news/categories",
  NEWS_BY_SUBCATEGORY: domain.MAIN_DOMAIN + "news/news-by-sub-category/",
  NEWS_BY_DATE: domain.MAIN_DOMAIN + "news/sort-news/0",
  NEWS_BY_VIEW: domain.MAIN_DOMAIN + "news/sort-news/1",
  NEWS_BY_CATEGORY: domain.MAIN_DOMAIN + "news/news-by-category/",
  SUB_CATEGORY_BY_CATEGORY:
    domain.MAIN_DOMAIN + "news/sub-category-by-category/",
  SUB_CATEGORY: domain.MAIN_DOMAIN + "news/sub-categories",
  ADD_NEWS: domain.MAIN_DOMAIN + "news/news",
  ADD_USER_CONST: domain.MAIN_DOMAIN + "user/user",
  NEWS_BY_ID: domain.MAIN_DOMAIN + "news/news/",
  COMMENTS_FOR_NEWS: domain.MAIN_DOMAIN + "news/comments/",
  ADD_COMMENTS: domain.MAIN_DOMAIN + "news/comment",
  ADD_VIEWS: domain.MAIN_DOMAIN + "news/views/",
  FULL_NEWS: domain.MAIN_DOMAIN+"news/full-news/",
  ALL_USERS: domain.MAIN_DOMAIN+"user/users",
  BAN_USER: domain.MAIN_DOMAIN+"user/ban-user",
  ARCHIVED_NEWS:domain.MAIN_DOMAIN+"news/archived-news/",
  GET_LIKE:domain.MAIN_DOMAIN+"news/like/",
  POST_LIKE:domain.MAIN_DOMAIN+"news/liked/",
  SART_PIC:"https://res.cloudinary.com/dmk0cb1qj/image/upload/v1582119575/uig51ogcbgugn0i347p5.jpg"
};
