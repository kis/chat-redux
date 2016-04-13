
import Figure from '../Logic/Figure';

export default class Horse extends Figure {

    constructor(opts) {
        super(opts);
        this.code = this.isBlack ? '&#9822;' : '&#9816;';
    }

    isValidMove(pos) {

    	if (this.pos.y < pos.y) {
	    	if ((this.pos.x + 1 == pos.x && this.pos.y + 2 == pos.y) ||
	    	    (this.pos.x - 1 == pos.x && this.pos.y + 2 == pos.y)) {
	    		return true;
	    	}
	
	    	if ((this.pos.x + 2 == pos.x && this.pos.y + 1 == pos.y) ||
	    	    (this.pos.x - 2 == pos.x && this.pos.y + 1 == pos.y)) {
	    		return true;
	    	}
		}
    	
    	if (this.pos.y > pos.y) {
	    	if ((this.pos.x + 2 == pos.x && this.pos.y - 1 == pos.y) ||
	    	    (this.pos.x - 2 == pos.x && this.pos.y - 1 == pos.y)) {
	    		return true;
	    	}

	    	if ((this.pos.x + 1 == pos.x && this.pos.y - 2 == pos.y) ||
	    	    (this.pos.x - 1 == pos.x && this.pos.y - 2 == pos.y)) {
	    		return true;
	    	}
    	}

    	return false;

    }

}