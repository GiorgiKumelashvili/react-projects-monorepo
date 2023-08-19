import { decorate, injectable } from 'inversify';
import { Constructor, IocContainerFinal } from './container';

export function Singleton(cls: Constructor) {
    IocContainerFinal.getContainer().bind(cls).toSelf().inSingletonScope();
    decorate(injectable(), cls);
}

export function Injectable(cls: Constructor) {
    IocContainerFinal.getContainer().bind(cls).toSelf();
    decorate(injectable(), cls);
}
