import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <App />
     </Router>
   </React.StrictMode>,
)
