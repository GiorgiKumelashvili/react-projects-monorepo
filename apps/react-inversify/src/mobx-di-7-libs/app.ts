import { IocContainer, Module } from './container';
import Store from './store';
import User from './user';

@Module({
    singletons: [User, Store],
})
export class IocModule extends IocContainer {}
