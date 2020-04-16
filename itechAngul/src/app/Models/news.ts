import { Comment } from './comment';
import { from } from 'rxjs';
export class News {
	constructor(
		public id: number,
		public name: string,
		public image: string,
		public text: string,
		public viewers: number,
		public categoryId: number,
		public coment: Comment
	) {}
}
