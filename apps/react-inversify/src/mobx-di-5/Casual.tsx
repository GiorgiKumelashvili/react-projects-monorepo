import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import Store1 from './store-1';
import Store2 from './store-2';

export const Casual = observer(() => {
	const store1 = useInjection(Store1);
	const store2 = useInjection(Store2);

	return (
		<div>
			<h1>wassup</h1>
			<h1>gender store 1: {store1.user.gender}</h1>
			<h1>gender store 2: {store2.user.gender}</h1>
			<button onClick={() => store1.switchGender()}>switching from store 1</button>
		</div>
	);
});
