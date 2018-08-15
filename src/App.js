import React, {Component} from 'react';
import './App.css';
import Link from "react-router-dom/es/Link";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Kotisivu from "./komponentit/Kotisivu";
import Kayttajalistaus from "./komponentit/Kayttajalistaus";
import Kayttajalisays from "./komponentit/Kayttajalisays";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Link to="/">Kotisivu</Link>
                    <Link to="/kayttajalistaus">Käyttäjälistaus</Link>
                    <Link to="/kayttajalisays">Käyttäjälisäys</Link>
                    <Link to="#">Käyttäjäpäivitys</Link>
                    <Switch>
                        <Route exact path="/" component={Kotisivu}/>
                        <Route path="/kayttajalistaus" component={Kayttajalistaus}/>
                        <Route path="/kayttajalisays" component={Kayttajalisays}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
