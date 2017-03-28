import Component from  './component.js';

import './turn.css';

export default class Trun extends Component{
    static getRootClass() {
        return '.turn';
    }

    constructor(root) {
        super(root);
        this.turn =1;
        this.root.textContent = "X  Turn";
    }
    reset(){
        this.turn =1;
        this.root.textContent = "X  Turn";
    }   
    change(){
        if(this.turn == 1)
        {
            this.root.textContent = "O  Turn";
            this.turn = 0;
        }
        else{
            this.root.textContent = "X  Turn";
            this.turn = 1;
        }
    } 
}