import React from 'react';


export function FormatTime(props) {
    let time = props.time;

    const seconds = time % 60; // seconds
    time = (time - seconds) / 60;
        const minutes = time % 60; // minutes
    time = (time - minutes) / 60;
    const hours = time % 24;
    time = (time - hours) / 24;
    const days = time % 31;
    const weeks = time % 7;
    time = (time - days) / 31;
    const months = time % 12;
    time = (time - months) / 12;
    const years = time;
    
    const leftDate = `${years}/${months}/${days}`;
    const leftTime = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    return (
        <div>
            {leftDate} {leftTime}
        </div>
    );
}

function addZero(number) {
    number = number.toString();
    return number.length === 1 ? `0${number}` : number;
}