function setHMSTime(time) {
    var sec_num = parseInt(time, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

class StopWatch {
  constructor(watchCallBack) {
    this._watchCallBack = watchCallBack;
    this._seconds = 0;
    this._intervalId = null;
    
    this.sendTime();
  }
  
  start() {
    if (this._intervalId) {
      return;
    }

    this.sendTime();

    this._intervalId = setInterval(() => {
      this._seconds++;
      this.sendTime();
    }, 1000);
  }
  
  stop() {
    clearInterval(this._intervalId);
    this._intervalId = null;
  }
  
  clear() {
    this.stop();
    this._seconds = 0;
    this.sendTime();
  }

  split() {
    const curTime = setHMSTime(this._seconds);
    let splitOutput = document.createElement('h3');
    splitOutput.innerHTML += curTime;
    document.body.appendChild(splitOutput);
  }
  
  sendTime() {
    this._watchCallBack(setHMSTime(this._seconds));
  }


}
///////////
class StopWatchView {
  constructor(selector) {
    this._wrapper = document.querySelector(selector);
    this._startButton = null;
    this._stopButton = null;
    this._clearButton = null;
    this._output = null;

    this.createOutput();

    this._timer = new StopWatch(seconds => {
      this._output.innerText = seconds;
    });
    
    this.createButton({
      text: 'Start',
      callBack: () => {
        this._timer.start();
      }
    });
    
    this.createButton({
      text: 'Stop',
      callBack: () => {
        this._timer.stop();
      }
    });
    
    this.createButton({
      text: 'Clear',
      callBack: () => {
        this._timer.clear();
      }
    });

    this.createButton({
      text: 'Split',
      callBack: () => {
        this._timer.split();
      }
    });
  }
  
  createButton(buttonData) {
    const button = document.createElement('button');
    button.innerText = buttonData.text;
    button.addEventListener('click', buttonData.callBack);
    this._wrapper.appendChild(button);
  }

  createOutput() {
    this._output = document.createElement('div');
    this._wrapper.appendChild(this._output);
  }
}

const view1 = new StopWatchView('#stopWatch1');

class backTimer {
  constructor(hour, minute, second, watchCallBack) {
    this._output = null;
    this._allSeconds = 0;
    this._finalTime = null;
    this._hour = hour * 3600;
    this._minute = minute * 60;
    this._second = second;
    this._allSeconds = this._second + this._minute + this._hour;

    this._wrapper = document.querySelector('#backTimer');

    this.setTime();
    this.createOutput();
    this.startBackTimer();
  }

  setTime() {
    this._finalTime = setHMSTime(this._allSeconds);
  }

  createOutput() {
    this._output = document.createElement('div');
    this._output.innerText = this._finalTime;
    this._wrapper.appendChild(this._output);
  }

  startBackTimer() {
    let time = this._allSeconds;
    setInterval(function(){
      time--;
      let timeResult;
      timeResult = setHMSTime(time);
      let updateTime = document.querySelector("#backTimer");
      let inner = updateTime.querySelector("div");
      inner.innerText = timeResult;
    }, 1000);
  }
}

const timer = new backTimer(5, 6, 789);
