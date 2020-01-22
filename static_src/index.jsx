import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './components/Router';
import initStore, { history } from './utils/store';


const { store, persistor } = initStore();

ReactDOM.render(
   <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
         <ConnectedRouter history={history}>
            <MuiThemeProvider>
               <Router />
            </MuiThemeProvider>
         </ConnectedRouter>
      </PersistGate>
   </Provider>,
   document.getElementById('root')
)