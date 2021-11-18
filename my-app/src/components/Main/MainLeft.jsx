import React from 'react'
import './Main.css';
import MainLeftCategory from './MainLeftCategory';
import MainLeftSelling from './MainLeftSelling';
import MainLeftBest from './MainLeftBest';

function MainLeft() {
    return (
        <div className="mainLeft">
            <MainLeftCategory />
            <MainLeftSelling />
            <MainLeftBest />
        </div>
    )
}

export default MainLeft
