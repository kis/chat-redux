
import Figure from '../Logic/Figure';

export default class Rook extends Figure {

    constructor(opts) {
        super(opts);
        this.code = this.isBlack ? '&#9820;' : '&#9814;';
    }

    isValidMove(pos) {

    	if (this.pos.x > this.pos.y) {
    		if (this.pos.x - this.pos.y == pos.x - pos.y) {
    			return true;
    		}
    	}

    	if (this.pos.x < this.pos.y) {
    		if (this.pos.y - this.pos.x == pos.y - pos.x) {
    			return true;
    		}
    	}

        return false;

    }

}