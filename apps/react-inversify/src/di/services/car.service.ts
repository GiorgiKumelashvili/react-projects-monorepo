import { injectable } from 'inversify';

@injectable()
export class CarService {
	printMessage() {
		console.log('hello from carr');
	}
}
