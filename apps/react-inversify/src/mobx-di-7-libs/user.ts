import { makeAutoObservable } from 'mobx';
import { inject, injectable } from 'inversify';
import Store from './store';

@injectable()
class User {
    @inject(Store) public store: Store;

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
