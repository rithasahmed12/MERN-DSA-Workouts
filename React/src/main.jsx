import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataContextProvider } from './components/useContext/createContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
    <App />
    </DataContextProvider>
  </React.StrictMode>,
)
