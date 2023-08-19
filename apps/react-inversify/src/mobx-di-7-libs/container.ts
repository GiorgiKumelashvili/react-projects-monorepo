import { Container } from 'inversify';

interface Constructor {
    new (...args: any[]): any;
}

interface BindAllProps {
    default?: Array<Constructor>;
    singletons?: Array<Constructor>;
}

export abstract class IocContainer {
    private static _IocContainer: Container;

    public static getContainer() {
        if (!this._IocContainer) {
            this._IocContainer = new Container();
        }

        return this._IocContainer;
    }

    public static bindAll(props: BindAllProps) {
        if (!this._IocContainer) {
            this._IocContainer = new Container();
        }

        if (props.default) {
            props.default.forEach((cls) => IocContainer._IocContainer.bind(cls).toSelf());
        }

        if (props.singletons) {
            props.singletons.forEach((cls) => IocContainer._IocContainer.bind(cls).toSelf().inSingletonScope());
        }
    }
}

export function Module(props: BindAllProps) {
    return (ctor: Function) => {
        IocContainer.bindAll(props);
    };
}
