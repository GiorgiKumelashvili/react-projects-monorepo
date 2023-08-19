import { Provider } from 'inversify-react';
import * as React from 'react';
import { Casual } from './Casual';
import { myContainer } from './inversify.config';

export default class MobxThird extends React.Component {
	public render() {
		return (
			<div>
				<Provider container={myContainer}>
					<Casual />
				</Provider>
			</div>
		);
	}
}
