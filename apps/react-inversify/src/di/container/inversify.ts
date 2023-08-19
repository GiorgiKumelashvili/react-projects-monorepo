import { Container } from 'inversify';
import { CarService } from '../services/car.service';
import { ClientService } from '../services/client.service';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<ClientService>(TYPES.ClientService).to(ClientService);
myContainer.bind<CarService>(TYPES.CarService).to(CarService);
export { myContainer };
