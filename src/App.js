import React from 'react'; 
import './App.css';

import Navbar from './Components/Navbar';

import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Rooms from './Components/pages/Rooms';
import SingleRoom from './Components/pages/SingleRoom';
import Error from './Components/pages/Error';

import { Route, Switch } from 'react-router-dom';



function App() { 

    return ( 
        <div className="App">
        
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/about/" component={ About } />
                <Route exact path="/contact/" component={ Contact } />
                <Route exact path="/rooms/" component={ Rooms } />
                <Route exact path="/rooms/:slug" component={ SingleRoom } />
                <Route component={Error} />
            </Switch>
        
        </div>
    );
   
}
export default App;