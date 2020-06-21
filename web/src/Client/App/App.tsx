import React from 'react';
import {MainPage} from '../clientComponents/MainPage/MainPage';
import classes from './styles/index.module.scss';

const App = () => {
    return (
       <div className={classes.app}>
            <MainPage/>
       </div>
    );
};

export default App;


