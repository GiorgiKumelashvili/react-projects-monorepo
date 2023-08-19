import { inject, injectable } from 'inversify';
import { TYPES } from '../container/types';
import { CarService } from './car.service';

@injectable()
export class ClientService {
	@inject(TYPES.CarService) private carService: CarService;

	prices = [1, 2, 3];

	public logger() {
		this.carService.printMessage();
	}

	public getPrices() {
		return this.prices.join(',');
	}
}
