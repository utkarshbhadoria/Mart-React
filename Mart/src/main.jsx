import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import ProductContextProvider from './contexts/productContext/productContextProvider.jsx'
import './index.css'

import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* redux provider */}
    <Provider store={store}> 
        <App />
    </Provider>
  </React.StrictMode>,
)
