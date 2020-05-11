import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import Signup from "./layouts/signup/signup";
import Signin from "./layouts/signin/signin";
import Home from "./layouts/home/home";
import Messages from "./layouts/messages/messages";
import Dialog from "./layouts/dialog/dialog";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-main">
                        <Header/>
                        <Switch>
                            <Route exact path='/signin' component={Signin}/>
                            <Route exact path='/signup' component={Signup}/>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/messages' component={Messages}/>
                            <Route exact path='/dialog' component={Dialog}/>
                        </Switch>
                    </div>
                    <div className="App-footer">
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
