import { News } from './news';
import { Comment } from './comment';
import { from } from 'rxjs';
export class NewsWithComments {
	constructor(public news: News, public comment: Comment) {}
}
