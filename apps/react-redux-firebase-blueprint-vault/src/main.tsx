import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthContextProvider } from './auth/auth-context';
import { FocusStyleManager, HotkeysProvider } from '@blueprintjs/core';

// styles
import './index.scss';
import { initializeFirebase } from './firebase';

// firebase, important for refresh
initializeFirebase();

// misc
FocusStyleManager.onlyShowFocusOnTabs();

const rootNode = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <HotkeysProvider>
        <RouterProvider router={router} />
      </HotkeysProvider>
    </AuthContextProvider>
  </Provider>,
  rootNode
);
