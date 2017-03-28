import Component from  './component.js';

import './cell.css';

export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    constructor(root) {   
        super(root);
        root.addEventListener("click", this.handleDomClick.bind(this));
        this.occupied = 0;
        this.root.textContent =' ';
        this.reset();
    }

    reset() {
        this.occupied = 0;
        this.root.textContent = ' ';
        this.root.style.color = 'lightgreen';
    }

    handleDomClick() {
        this.fire('click');
        
    }
    turnX(){
        this.root.textContent = 'X';
        this.root.style.color = 'grey';
        this.occupied = 1;
    }
    turnO(){
        this.root.textContent = 'O';
        this.root.style.color = 'white';
        this.occupied = 2;
    }
}
    
