import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import Modal from 'react-modal';
import { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/team-five">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
