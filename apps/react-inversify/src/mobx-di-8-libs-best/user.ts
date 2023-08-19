import { makeAutoObservable } from 'mobx';
import { inject } from 'inversify';
import Store from './store';
import { Injectable } from './container_decorators';

@Injectable
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
