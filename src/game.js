import * as Util from './util';
import Board from './board';
import { setTimer, resetTimer} from './timer'

export const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌',
    'grape': '🍇',
    'strawberry': '🍓'
}

class Game {

    constructor() {
        this.board = new Board();
        this.lvl = 1;
        this.streak = 0;
        this.randomFruits = ''

        this.timer = setInterval(setTimer, 1000)
    }

    start () {
        this.reset();
        this.renderStreak();
        this.addMoveListener();
        this.resetFruits();
        resetTimer();

    }

    reset () {
        this.lvl = 1;
        this.streak = 0;
    }

    win (target, current) {
        let win = false

        if (target.join(" ") === current.replace(/\n/g, " ")) {
            win = true
        };

        if (win) {
            this.increaseLevel()
        } 
        else {
            this.streak = 0
            this.renderStreak()
            alert('keep trying')
        };
    };

    increaseLevel() {
        this.streak ++
        this.lvl ++
        this.resetFruits();
        this.renderStreak();
    }

    renderStreak() {
        let ele = document.getElementById('streak');
        ele.innerText = this.streak;
    }

    addMoveListener () {
        document.addEventListener('keydown', this.move);
    };

    resetFruits() {
        this.randomFruits = Util.randomFruit(Object.values(FRUITS), this.lvl);
        this.deleteRandomFruits();
        Util.removeAllFruit();
        Util.placeFruits();
        this.generateRandomFruits(this.randomFruits);
    };

    generateRandomFruits (arr) {
        arr.forEach(ele => {
            let basket = document.getElementById('target-basket');
            let item = document.createElement('div');
            item.setAttribute('class', 'target-fruit');
            let pic = document.createTextNode(ele);
            item.appendChild(pic);
            basket.appendChild(item);
        })
    };

    deleteRandomFruits () {
        let fruits = document.querySelectorAll('.target-fruit');
        fruits.forEach(fruit => {
            fruit.remove()
        })
    };

    move(e) {
        let moveBy = 25
        switch (e.keyCode) {
            case 37:
                if (parseInt(circle.style.left) - 25 > 0) {
                    circle.style.left = parseInt(circle.style.left) - moveBy
                } else {
                    circle.style.left = 0
                }
                Util.addFruit()
                break;
            case 39:
                if (parseInt(circle.style.left) + 25 < 400) {
                    circle.style.left = parseInt(circle.style.left) + moveBy
                } else {
                    circle.style.left = (400 - 25)
                }
                Util.addFruit()
                break;
            case 38:
                if (parseInt(circle.style.top) - 25 > 0) {
                    circle.style.top = parseInt(circle.style.top) - moveBy
                } else {
                    circle.style.top = 0
                }
                Util.addFruit()
                break;
            case 40:
                if (parseInt(circle.style.top) + 25 < 400) {
                    circle.style.top = parseInt(circle.style.top) + moveBy
                } else {
                    circle.style.top = (400 - 25)
                }
                Util.addFruit()
                break;
            default:
                break;
        }

    }

};

export default Game;