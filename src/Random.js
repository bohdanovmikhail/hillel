import React from 'react';

function RandomOld(props) {
    const min = parseInt(props.min);
    const max = parseInt(props.max);
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    
    return (
        <div>
            Random number is: {randomNumber}
        </div>
    );
}

class RandomNew extends React.Component {
    generateNumber() {
        const min = parseInt(this.props.min);
        const max = parseInt(this.props.max);
        return Math.round(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <div>
                Random number is: {this.generateNumber()}
            </div>
        );
    }
}

export {
    RandomNew,
    RandomOld
};
