import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/alert/Alert';
import List from './components/layout/list/List';
import './app.css';


const App = () => {
    return (
        <Provider store={store}>  
         <div className='App'>
            Welcome To MediGreen
         </div>
         <div>
           <Alert />
         </div>
         <List/>
       </Provider> 
    )
}
export default App
