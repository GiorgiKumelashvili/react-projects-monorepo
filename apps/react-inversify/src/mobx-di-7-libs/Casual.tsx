import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import User from './user';

export const Casual = observer(() => {
    const k = useInjection(User);

    return (
        <div>
            <h1>wassup</h1>
            <h1>gender store 1: {k?.store.num}</h1>
            <button onClick={() => k?.store.switchNumber()}>switching from store 1</button>
        </div>
    );
});
