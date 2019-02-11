import React, { Component } from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className={style.navigation}>
                <Link to="following"><button className={[style.link, style.active].join(" ")}>Following</button></Link>
                <Link to="trending"><button className={style.link}>Trending</button></Link>
                <Link to="recommended"><button className={style.link}>Recommended</button></Link>
            </nav>
        );
    }
}

export default Navigation;