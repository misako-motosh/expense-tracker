import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SourceProvider from './components/SourceProvider';
import ExpenditureProvider from './components/ExpenditureProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenditureProvider>
      <SourceProvider>
        <App />
      </SourceProvider>
    </ExpenditureProvider>
  </React.StrictMode>,
)
