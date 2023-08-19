import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import User from './user';

@injectable()
class Store {
	public num: number = 0;

	@inject(User) public user: User;

	constructor() {
		makeAutoObservable(this);
	}

	get retunum() {
		return `${this.num}~~~~~~~~`;
	}

	get addNum() {
		return this.num + 10;
	}

	add() {
		this.num++;
	}
}

export default Store;
