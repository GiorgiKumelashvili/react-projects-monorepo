import { Container, ContainerModule } from 'inversify';
import Store, { IStor } from './store';
import TYPE from './types';

const myContainer = new Container({ defaultScope: 'Singleton' });

const myStore = new ContainerModule(bind => {
	bind<IStor>(TYPE.IStor).to(Store);
});

const initilize = (): void => {
	myContainer.load(myStore);
};

initilize();

// const myContainer = new Container();
// myContainer.bind<IStor>(TYPE.IStor).to(Store);

export { myContainer, myStore };
