import React, { Component } from "react";
import style from "./ProfileIcon.module.css";
import placeholder from "./placeholder_400x400.jpg";

class ProfileIcon extends Component {
    render() {
        return (
            <div><img className={style.img} alt="" src={placeholder}/></div>
        );
    }
}

export default ProfileIcon;