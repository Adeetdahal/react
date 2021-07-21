import React from 'react';
import './usercard.css';

const UserCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Adeet Dahal</div>
                <div className="description">{props.children}</div>
            </div>
        </div>
    );
};

export default UserCard;
