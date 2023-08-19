import { Container } from 'inversify';
import Store from './store';
import TYPE from './types';

const myContainer = new Container({ defaultScope: 'Singleton' });
myContainer.bind<Store>(TYPE.IStor).to(Store);

export { myContainer };
