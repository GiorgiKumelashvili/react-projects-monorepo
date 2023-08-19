import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import Store from './store';
import TYPE from './types';

export const Casual = observer(() => {
	const store = useInjection<Store>(TYPE.Store);

	return (
		<div>
			<h1>{store.num}</h1>
			<h2>{store.retunum}</h2>
			<h2>{store.addNum}</h2>
			<button onClick={() => store.add()}>nc</button>
		</div>
	);
});
