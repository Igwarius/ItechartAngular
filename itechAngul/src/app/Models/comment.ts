export class Comment {
  constructor(
    public id: number,
    public login: string,
    public newsId: number,
    public text: string,
    public likes: number
  ) {}
}
