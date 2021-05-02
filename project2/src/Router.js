import React from 'react'
import {Switch,Route} from "react-router-dom"
import Main from "./pages/Main"
import Comments from "./components/Comments"

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/posts/:id" component={Comments}/>
            </Switch>
            
        </div>
    )
}

export default Router
