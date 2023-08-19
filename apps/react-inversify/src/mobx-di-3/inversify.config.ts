import 'reflect-metadata';
import { Container } from 'inversify';
import Store from './store';
import TYPE from './types';

const myContainer = new Container();
myContainer.bind<Store>(TYPE.Store).to(Store);

export { myContainer };
