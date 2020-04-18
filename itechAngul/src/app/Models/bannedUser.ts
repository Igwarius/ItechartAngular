export class BannedUser {
	constructor(public login: string, public reason: string, public period: number) {}
}
