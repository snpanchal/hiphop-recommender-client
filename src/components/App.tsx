import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AlbumPicker from './AlbumPicker';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={AlbumPicker} exact path="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
