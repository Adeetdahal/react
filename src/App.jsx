import React from 'react';
import SingleComment from './components/SingleComment';
import UserCard from './components/UserCard';
import profile1 from './image/1.jpg';
import profile2 from './image/2.jpg';
import profile3 from './image/3.jpg';
import './app.css';

const App = () => {
    return (
        <div className="app">
            <UserCard>
                <div className="post">
                    Hello! This is my first basic react app
                </div>

                <SingleComment
                    name="Adeet Dahal"
                    date="1h"
                    text="Fantastic!!"
                    picture={profile1}
                />

                <SingleComment
                    name="Vikrant Shrestha"
                    date="3h"
                    text="Bad"
                    picture={profile2}
                />

                <SingleComment
                    name="Rozeel Kusma"
                    date="5h"
                    text="Beautiful"
                    picture={profile3}
                />
            </UserCard>
            {/* <div className="" Nice></div>
            <div className="">Beautiful</div>
            <div className="">Geourgeous</div> */}
        </div>
    );
};

export default App;
