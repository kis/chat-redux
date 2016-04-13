
import Figure from '../Logic/Figure';

export default class Queen extends Figure {

    constructor(opts) {
        super(opts);
        this.code = this.isBlack ? '&#9819;' : '&#9813;';
    }

    isValidMove(pos) {

        if (pos.x !== this.pos.x) {
            if (pos.y == this.pos.y || 
                this.pos.x - pos.x == pos.y - this.pos.y || 
                this.pos.x - pos.x == this.pos.y - pos.y) {
                return true;
            }
        }

        if (pos.x == this.pos.x && pos.y !== this.pos.y) {
            return true;
        }

        return false;

    }

}