import { Provider } from 'inversify-react';
import { IocModule } from './app';
import { Casual } from './Casual';

const MobxSeventh = () => {
    return (
        <Provider container={IocModule.getContainer()}>
            <Casual />
        </Provider>
    );
};

export default MobxSeventh;
