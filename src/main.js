import React, { Component } from 'react';
import Character from './Character1';
import Location from './Loc';
import HomePage from './Home';
import Common from './help';
import {Route, Switch} from 'react-router-dom';
import EpisodePlain from './Episode2';

class main extends Component{
    render(){
        return(
        <div>
            <Switch>
                <Route exact path='/' render={()=>(<div> <Common/> <HomePage/> </div>)} />    
                <Route exact path='/character' render={()=>( <div> <Common /> <Character1/> </div>)} />
                <Route exact path='/location' render={()=>(<div> <Common /> <Loc/> </div> )} />
                <Route exact path='/episode' render={()=>( <div> <Common /> <Episode2 /> </div> )} />
            </Switch>
        </div>
        );
        
    }
}
export default main;











