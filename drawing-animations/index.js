class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.pause();
        }
        else {
            if (this.onTick) {
                this.onTick();
            }
            this.timeRemaining = this.timeRemaining - 1;
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

    onDurationChange () {

    }
}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart () {
        console.log('Timer started...');
    },
    onTick () {
        console.log('Timer tick...')
    },
    onComplete () {
        console.log('Timer complete!')
    }
});
