import Component from  './component.js';

import './cell.css';

export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    constructor(root) {   
        super(root);
        this.occuypied = 0;
        root.addEventListener("click", this.handleDomClick.bind(this));
        this.reset();
    }

    reset() {
        this.occuypied = 0;
        this.root.textContent = ' ';
    }

    handleDomClick() {
        this.fire('click');
    }
    turnX(){
        this.root.textContent = 'X';
        this.occupied = 1;
    }
    turnO(){
        this.root.textContent = 'O';
        this.occupied = 2;
    }
}
    
