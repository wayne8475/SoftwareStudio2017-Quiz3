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

        this.reward = document.querySelector(".reward");

        this.reset();
    }

    reset() {
        this.role_X.reset(1);
        this.role_O.reset(2);
        this.turn.reset();
    }
    changeTurn(){
        this.turn.change();
        this.role_X.root.style.color = 'blue';
        this.role_O.root.style.color = 'blue';
    }
    win(winner){
        if(winner == 1){
            this.role_X.win(1);
        }
        else{
            this.role_O.win(2);
        }
    }
}
