import Component from  './component.js';
import Banner from  './banner.js';
import Grid from  './grid.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.banner = new Banner(root.querySelector('.banner'));

        this.grid = new Grid(root.querySelector('.grid'));
        this.grid.on('changeTurn',this.handleChangeTurn.bind(this));
        this.grid.on('win',this.handleWin.bind(this));
        this.grid.on('draw',this.handleDraw.bind(this));
      
        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('resetClick', this.resetClick.bind(this));
    }

    resetClick() {
        this.banner.reset();
        this.grid.reset();
    }
    handleChangeTurn(firer) {
        this.banner.changeTurn();
    }
    handleWin(firer, winner) {
        this.banner.win(winner);
        this.grid.reset();
    }
    handleDraw(firer){
        this.banner.turn.reset();
        this.grid.reset();
    }

}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
