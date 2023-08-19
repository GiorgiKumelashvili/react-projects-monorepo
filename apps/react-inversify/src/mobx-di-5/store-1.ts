import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import User from './user';

@injectable()
class Store1 {
	public num: number = 0;

	@inject(User) public user: User;

	constructor() {
		makeAutoObservable(this);
	}

	switchGender() {
		this.user.switchGender();
	}
}

export default Store1;
