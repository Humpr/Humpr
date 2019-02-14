import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Redirect exact from="/" to="/following" />
                <Header></Header>
            </div>
        );
    }
}

export default App;
