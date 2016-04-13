
import King     from '../Figures/King';
import Queen    from '../Figures/Queen';
import Rook     from '../Figures/Rook';
import Elephant from '../Figures/Elephant';
import Horse    from '../Figures/Horse';
import Pawn     from '../Figures/Pawn';

export default class InitController {

    constructor(opts) {
        this.whiteFigures = this.createFigures(false);
        this.blackFigures = this.createFigures(true);
    }

    createFigures(isBlack) {
        var figures = {
            kings: [],
            queens: [],
            rooks: [],
            elephants: [],
            horses: [],
            pawns: []
        };

        figures.kings.push(new King({isBlack: isBlack}));
        figures.queens.push(new Queen({isBlack: isBlack}));

        for(let i=0; i<2; i++) {
            figures.rooks.push(new Rook({isBlack: isBlack}));
        }

        for(let i=0; i<2; i++) {
            figures.elephants.push(new Elephant({isBlack: isBlack}));
        }

        for(let i=0; i<2; i++) {
            figures.horses.push(new Horse({isBlack: isBlack}));
        }

        for(let i=0; i<8; i++) {
            figures.pawns.push(new Pawn({isBlack: isBlack}));
        }

        return figures;
    }

    getFigureByPosition(pos) {
        let figure = null;

        if (pos.y == 0) {
            if (pos.x == 0) figure = this.blackFigures.rooks[0];
            if (pos.x == 1) figure = this.blackFigures.horses[0];
            if (pos.x == 2) figure = this.blackFigures.elephants[0];
            if (pos.x == 3) figure = this.blackFigures.queens[0];
            if (pos.x == 4) figure = this.blackFigures.kings[0];
            if (pos.x == 5) figure = this.blackFigures.elephants[1];
            if (pos.x == 6) figure = this.blackFigures.horses[1];
            if (pos.x == 7) figure = this.blackFigures.rooks[1];
        }

        if (pos.y == 1) figure = this.blackFigures.pawns[pos.x];
        if (pos.y == 6) figure = this.whiteFigures.pawns[pos.x];

        if (pos.y == 7) {
            if (pos.x == 0) figure = this.whiteFigures.rooks[0];
            if (pos.x == 1) figure = this.whiteFigures.horses[0];
            if (pos.x == 2) figure = this.whiteFigures.elephants[0];
            if (pos.x == 3) figure = this.whiteFigures.queens[0];
            if (pos.x == 4) figure = this.whiteFigures.kings[0];
            if (pos.x == 5) figure = this.whiteFigures.elephants[1];
            if (pos.x == 6) figure = this.whiteFigures.horses[1];
            if (pos.x == 7) figure = this.whiteFigures.rooks[1];
        }

        if (figure) {
            figure.setInitPos(pos);
        }

        return figure;
    }

}