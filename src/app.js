import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import './app.css';


const App = () => {
    return (
        <Provider store={store}>
         <Alert />  
         <div className='App'>
         Welcome To Medigreen
        </div>
       </Provider> 
    )
}
export default App
