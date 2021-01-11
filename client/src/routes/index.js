import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Index from '../pages/Index/Main';
import Todos from '../pages/Todos/Todos';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/todos' component={Todos} />
            <Route exact path='/discord' component={() => { 
                window.location.href = 'https://discord.gg/3E5ce9WY2a'; 
                return null;
            }} />
        </Switch>
    );
}

export default Routes;