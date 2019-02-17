import React, { Component } from "react";
import style from "./FollowingPage.module.css";
import MyConvoy from "../components/MyConvoy/MyConvoy";

class FollowingPage extends Component {
    render() {
        return (
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.showMyConvoyButton}>&#9776;</div>
                    <div className={style.Following}>Stories</div>
                </header>
                <main className={style.main}>
                    <MyConvoy className={style.MyConvoy}/>
                    <div className={style.Feed}>feed</div>
                </main>
            </div>
        );
    }
}

export default FollowingPage;
