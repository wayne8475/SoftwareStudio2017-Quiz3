import Component from './component.js';
import Role from  './role.js';
import Turn from  './turn.js';

import './banner.css';


export default class Banner extends Component {
    static getRootClass() {
        return '.banner';
    }

    constructor(root) {
        super(root);

		const Roles = root.querySelectorAll(Role.getRootClass());
        this.role_X = new Role(Roles[0], 1);
        this.role_O = new Role(Roles[1], 2);
        this.turn = new Turn(root.querySelector('.turn'));

        this.role_X.reset();
        this.role_O.reset();
        this.turn.reset();
    }

    reset() {
        this.role_X.reset();
        this.role_O.reset();
        this.turn.reset();
    }
    changeTurn(){
        this.turn.change();
    }
    draw(){
        this.turn.reset();
    }
    win(winner){
        this.turn.reset();
        if(winner === 1){
            this.role_X.win();
        }
        else{
            this.role_X.win();
        }
    }
}
