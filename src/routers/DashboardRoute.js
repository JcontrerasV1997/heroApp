import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dummies/DcScreen'
import { HeroScreen } from '../components/dummies/HeroScreen'
import { MarvelScreen } from '../components/dummies/MarvelScreen'
import {Navbar} from '../components/dummies/Navbar'
import { Search } from '../components/smarts/Search'

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvelhero" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dchero" component={DcScreen}/>
                    <Route exact path="/search" component={Search}/>
                <Redirect to="/marvelhero"/>
                </Switch>
            </div>
        </>
    )
}
