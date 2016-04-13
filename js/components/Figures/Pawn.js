
import Figure from '../Logic/Figure';

export default class Pawn extends Figure {

    constructor(opts) {
        super(opts);
        this.code = this.isBlack ? '&#9823;' : '&#9817;';
    }

    isValidMove(pos) {

    	if (pos.x - this.pos.x < 2 && (pos.y - this.pos.y <= 2 || this.pos.y - pos.y >= -2)) {
            if (this.pos.x == pos.x) {                
                if (pos.y - this.pos.y == 1 || pos.y - this.pos.y == -1) {
                    return true;
                }

                if ((pos.y - this.pos.y == 2 || pos.y - this.pos.y == -2) && this.initPos.y == this.pos.y) {
                    return true;
                }
    		}

    		if (this.pos.y == pos.y && (pos.x - this.pos.x == 1 || pos.x - this.pos.x == -1)) {
                return true;
    		}
    	}

        return false;

    }

}