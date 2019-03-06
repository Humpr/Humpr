import React, { Component } from "react";
import style from "./FollowingCard.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

class FollowingCard extends Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.cardHeader}>
                    <ProfileIcon
                        containerClassName={style.cardProfileIconContainer}
                        className={style.cardProfileIcon}
                    />
                    <div className={style.cardUername}>Username</div>
                    <div className={style.cardIcons}>
                        <div className={style.iconDot}>·</div>
                        <div className={style.iconReHump}>
                        <object type="image/svg+xml" width="80%" height="80%" data="https://trello-attachments.s3.amazonaws.com/5c0b0627b732e12622071af5/5c0f25ec6ce3946de706e219/20fd37e83724329c0ca0197427e44652/Re-Hump.svg">
                          <img src="https://trello-attachments.s3.amazonaws.com/5c0b0627b732e12622071af5/5c0f25ec6ce3946de706e219/e00bf82f2c5a9d718fd3871491849f01/Re-Hump.png" />
                        </object>
                        </div>
                        <div className={style.iconHump}>
                        <object type="image/svg+xml" width="90%" height="90%" data="https://trello-attachments.s3.amazonaws.com/5c0b0627b732e12622071af5/5c0b10ec43c3d149acb9343e/cafa8cf9ede58f5bdaa0f98b51c64030/Heart_lines.svg">
                          <img src="https://trello-attachments.s3.amazonaws.com/5c0b0627b732e12622071af5/5c0b10ec43c3d149acb9343e/c40c866230c6d4d195a4a8d965d15c73/Heart_lines.png" />
                        </object>
                        </div>
                    </div>
                </div>
                <div className={style.cardContentContainer}>
                    <div className={style.cardContent}>
                    </div>
                </div>
                <div className={style.cardDescription}>
                    Bacon ipsum dolor amet ham hock short loin capicola ground round leberkas.
                    Swine ribeye andouille corned beef.
                    Pork belly rump cow, pork bresaola shoulder burgdoggen cupim ham hock venison turducken alcatra jowl.
                    Short ribs meatloaf filet mignon doner kevin jowl tongue alcatra burgdoggen chicken.
                    Sirloin meatloaf salami spare ribs shoulder, bacon rump pastrami picanha frankfurter jerky.
                    Fatback flank ham hock pork belly.
                </div>
                <div className={style.cardTags}>
                    <div className={style.cardTag}>#bacon</div>
                    <div className={style.cardTag}>#lorem</div>
                    <div className={style.cardTag}>#ipsum</div>
                    <div className={style.cardTag}>#lookAtThisLongTag</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className={style.cardTag}>#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </div>
        );
    }
}

export default FollowingCard;
