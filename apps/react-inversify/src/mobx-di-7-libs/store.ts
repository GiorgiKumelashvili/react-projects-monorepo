import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
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
