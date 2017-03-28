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

    win(player){
    	this.score++; 
        if(player == 1){
        	this.root.textContent = "X: " + this.score;
            this.root.style.color = 'red';
        }
        else{
        	this.root.textContent = "O: " + this.score;
            this.root.style.color = 'red';
        }
    }
    reset(player){
        this.score = 0;
        this.root.style.color = 'blue';
        if(player == 1){
        	this.root.textContent = "X: -";
        }
        else{
        	this.root.textContent = "O: -";
        }
    }
}