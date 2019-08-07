import React from 'react';

import { FormatTime } from './FormatTime';


export class StopWatch extends React.Component {
    state = {
        currentTime: 0
    };
    timerId = null;

    start() {
        this.timerId = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime + 1
            });
        }, 10);
    }

    stop() {
        clearInterval(this.timerId);
    }

    clear() {
        this.setState({
            currentTime: 0
        });
    }

    render() {
        return (
            <div>
                <FormatTime time={this.state.currentTime} />
                <button onClick={() => this.start()}>Start</button>
                <button onClick={() => this.stop()}>Stop</button>
                <button onClick={() => this.clear()}>Clear</button>
            </div>
        );
    }
}
