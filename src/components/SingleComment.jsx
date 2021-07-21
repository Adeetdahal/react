import React from 'react';
import './singlecomment.css';

const SingleComment = (props) => {
    return (
        <div clasName="comment">
            <a href="/" className="avatar">
                <img src={props.picture} alt="dp" />
            </a>
            <div className="contents">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>

                <div className="text">{props.text}</div>
            </div>
            <div className="button">
                <span className="add">+ </span>
                Add Friend
            </div>
        </div>
    );
};

export default SingleComment;
