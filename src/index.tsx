import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store/index';
import { App } from './App';

const rootElement = document.getElementById('root');
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
	</Provider>,
	rootElement
);
