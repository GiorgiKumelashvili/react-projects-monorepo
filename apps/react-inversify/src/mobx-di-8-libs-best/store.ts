import { makeAutoObservable } from 'mobx';
import { Singleton } from './container_decorators';

@Singleton
class Store {
    public num: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    switchNumber() {
        this.num = this.num === 1 ? 0 : 1;
    }
}

export default Store;
