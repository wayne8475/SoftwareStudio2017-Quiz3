import Component from './component.js';
import Cell from './cell.js';

import './grid.css';


export default class Grid extends Component {
    static getRootClass() {
        return '.grid';
    }

    constructor(root) {
        super(root);
        this.turn = 1;
        this.cells = [];
        const els = root.querySelectorAll(Cell.getRootClass());
        for (let el of els) {
            const cell = new Cell(el);
            cell.on('click', this.handleCellClick.bind(this));
            this.cells.push(cell);
        }   
    }

    reset() {
        this.turn = 1;
        for(let i=0; i<9; i++){
          this.cells[i].reset();
        }
    }

    handleCellClick(firer) {
    	if(firer.occupied == 0){
			if(this.turn == 1){
	    		firer.turnX();
                if(!this.isWin(this.turn)){
                    if(this.isDraw()){
                        this.fire('draw');
                    }
                    else{
                        this.turn = 2;
                        this.fire('changeTurn');
                    }
                }   
	    	}
	    	else{
	    		firer.turnO();
                if(!this.isWin(this.turn)){
                    if(this.isDraw()){
                        this.fire('draw');
                    }
                    else{
                        this.turn = 1;
                        this.fire('changeTurn');
                    }
                }	
	    	}
    	}
    }
    isWin(winner){
        if(this.cells[0].occupied == this.cells[1].occupied && this.cells[1].occupied == this.cells[2].occupied){
            if(this.cells[0].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[3].occupied == this.cells[4].occupied && this.cells[4].occupied == this.cells[5].occupied){
            if(this.cells[3].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[6].occupied == this.cells[7].occupied && this.cells[7].occupied == this.cells[8].occupied){
            if(this.cells[6].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[0].occupied == this.cells[3].occupied && this.cells[3].occupied == this.cells[6].occupied){
            if(this.cells[0].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[1].occupied == this.cells[4].occupied && this.cells[4].occupied == this.cells[7].occupied){
            if(this.cells[1].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[2].occupied == this.cells[5].occupied && this.cells[5].occupied == this.cells[8].occupied){
            if(this.cells[2].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[0].occupied == this.cells[4].occupied && this.cells[4].occupied == this.cells[8].occupied){
            if(this.cells[0].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        if(this.cells[2].occupied == this.cells[4].occupied && this.cells[4].occupied == this.cells[6].occupied){
            if(this.cells[2].occupied != 0){
                this.fire('win', winner);
                return true;
            }
        }
        return false;
    }
    isDraw(){
        for(let i=0; i<9; i++){
            if(this.cells[i].occupied == 0){
                return false;
            }
        }
        return true;
    }
}