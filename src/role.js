import Component from  './component.js';

import './role.css';

export default class Role extends Component{
    static getRootClass() {
        return '.role';
    }

    constructor(root, player) {
        super(root);

        this.player = player;
        this.score = 0; 
        
        if(player == 1){
        	root.textContent = "X: " + this.score;
        }
        else{
        	root.textContent = "O: " + this.score;
        }
    }

    win(){
    	this.score++; 
    }
    reset(){
        this.score = 0;
    }
}