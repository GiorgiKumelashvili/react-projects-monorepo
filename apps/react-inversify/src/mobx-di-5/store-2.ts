import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import User from './user';

@injectable()
class Store2 {
	public num: number = 0;

	@inject(User) public user: User;

	constructor() {
		makeAutoObservable(this);
	}
}

export default Store2;
