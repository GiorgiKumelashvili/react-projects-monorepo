import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import Store from './store';

export const Casual = observer(() => {
	const store = useInjection(Store);

	return (
		<div>
			<h1>wassup</h1>
			<h1>{store.num}</h1>
			<h2>{store.retunum}</h2>
			<h2>{store.addNum}</h2>
			<button onClick={() => store.add()}>nc</button>

			<h1>gender: {store.user.gender}</h1>
			<button onClick={() => store.user.switchGender()}>switch</button>
		</div>
	);
});
