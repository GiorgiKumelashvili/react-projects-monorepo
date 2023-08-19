import { Provider } from 'inversify-react';
import { Casual } from './Casual';
import { IocContainerFinal } from './container';

const MobxEighth = () => {
    return (
        <Provider container={IocContainerFinal.getContainer()}>
            <Casual />
        </Provider>
    );
};

export default MobxEighth;
