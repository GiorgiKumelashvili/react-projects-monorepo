import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
class Store {
	public num: number = 0;

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
