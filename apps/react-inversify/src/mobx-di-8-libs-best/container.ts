import { Container } from 'inversify';

export interface Constructor {
    new (...args: any[]): any;
}

export abstract class IocContainerFinal {
    private static _IocContainer: Container;

    public static getContainer() {
        if (!this._IocContainer) {
            this._IocContainer = new Container();
        }

        return this._IocContainer;
    }
}
