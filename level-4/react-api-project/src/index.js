import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeContextProvider} from './themeContext'
import { SellContextProvider } from './sellContext';

document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>  
        <SellContextProvider>
            <ThemeContextProvider>
                <App />        
            </ThemeContextProvider>      
        </SellContextProvider>
    </Router>
)


