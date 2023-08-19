import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
class User {
	public name = 'gio';
	public gender: 'male' | 'female' = 'male';

	constructor() {
		makeAutoObservable(this);
	}

	switchGender() {
		this.gender = this.gender === 'female' ? 'male' : 'female';
	}
}

export default User;
