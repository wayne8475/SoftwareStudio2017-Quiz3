import Component from  './component.js';

import './turn.css';

export default class Trun extends Component{
    static getRootClass() {
        return '.turn';
    }

    constructor(root) {
        super(root);
        this.turn =1;
        this.textContent = "Turn : X";
    }
    reset(){
        this.turn =1;
        this.textContent = "Turn : X";
    }   
    change(){
        if(this.turn == 1)
        {
            this.textContent = "Turn : O";
            this.turn = 0;
        }
        else{
            this.textContent = "Turn : X";
            this.turn = 1;
        }
    } 
}