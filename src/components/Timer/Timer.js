import React, { Component } from 'react';

import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            startTimer: undefined,
            counterText: 0,
            workMinutes: 25,
            workSeconds: "00",
            breakMinutes: 5,
            breakSeconds: "00",
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.timer = this.timer.bind(this);
        this.handleStop = this.handleStop.bind(this);

    }

    timer() {
        //Work Timer Countdown
        if (this.state.workSeconds != 0) {
            this.setState({
                workSeconds: this.state.workSeconds - 1
            })
        } else if (this.state.workMinutes != 0 && this.state.workSeconds == 0) {
            this.setState({
                workSeconds: 59,
                workMinutes: this.state.workMinutes - 1
            })
        }

        //Break Timer Countdown
        if (this.state.workMinutes == 0 && this.state.workSeconds == 0) {
            if (this.state.breakSeconds != 0) {
                this.setState({
                    breakSeconds: this.state.breakSeconds - 1
                });
            } else if (this.state.breakMinutes != 0 && this.state.breakSeconds == 0) {
                this.setState({
                    breakSeconds: 59,
                    breakMinutes: this.state.breakMinutes - 1
                });
            }
        }

        //Increment Counter by one if one full cycle is completed
        if (this.state.workMinutes == 0 && this.state.workSeconds == 0 && this.state.breakMinutes == 0 && this.state.breakSeconds == 0) {

            this.setState({
                workSeconds: "00",
                workMinutes: 25,
                breakSeconds: "00",
                breakMinutes: 5,
                counterText: this.state.counterText + 1
            });
        }
    }

    stopInterval() {
        clearInterval(this.state.startTimer);
    }

    handleStart() {
        if (this.state.startTimer === undefined) {
            this.setState({
                startTimer: setInterval(this.timer, 1000)
            });
        } else {
            alert("Timer is already running");
        }
    }

    handleReset() {
        this.stopInterval();

        this.setState({
            startTimer: undefined,
            workMinutes: 25,
            workSeconds: 0,
            breakMinutes: 5,
            breakSeconds: 0,
            counterText: 0
        });
    }

    handleStop() {
        this.stopInterval();
        this.setState({
            startTimer: undefined
        });
    }

    render() {

        var wm = this.state.workMinutes;
        var ws = this.state.workSeconds;
        var bm = this.state.breakMinutes;
        var bs = this.state.breakSeconds;

        if (wm == 0) wm = "00";
        else if (wm < 10) wm = "0" + wm;
        if (ws == 0) ws = "00";
        else if (ws < 10) ws = "0" + ws;
        if (bm == 0) bm = "00";
        else if (bm < 10) bm = "0" + bm;
        if (bs == 0) bs = "00";
        else if (bs < 10) bs = "0" + bs;


        return (
            <React.Fragment>
                <div class="timer-div">Timer</div>
                <div className="out row text-center ">
                    
                    <div className="test col-4 text-center">
                        <p className="ptimer">Work:</p>
                        <p className="ptimer">{wm}:{ws}</p>
                        <button id="start" className="tbtn" onClick={this.handleStart}>Start</button>
                    </div>
                    <div id="cycles" className="test col-4 text-center ">
                        <p className=" ptimer">Cycles:</p>
                        <p className=" ptimer">{this.state.counterText}</p>
                        <button id="stop" className="tbtn" onClick={this.handleStop}>Pause</button>
                    </div>
                    <div className="test col-4 text-center">
                        <p className="ptimer">Break:</p>
                        <p className="ptimer">{bm}:{bs}</p>
                        <button id="reset" className="tbtn" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Timer;
