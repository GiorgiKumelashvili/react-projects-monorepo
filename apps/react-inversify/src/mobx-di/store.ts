import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

export interface IStor {
	num: number;
	map: Map<string, object>;
	list: string[];
	obj: object;
	retunum: string;
	addNum: number;
	add: () => void;
}

@injectable()
class Store implements IStor {
	public num: number = 0;
	public map: Map<string, object> = new Map();
	public list: string[] = ['a', 'b'];
	public obj: object = { name: 'Mobx' };

	constructor() {
		makeAutoObservable(this);
	}

	public get retunum() {
		return `${this.num}~~~~~~~~`;
	}
	public get addNum() {
		return this.num + 10;
	}
	public add() {
		this.num++;
	}
}

export default Store;
