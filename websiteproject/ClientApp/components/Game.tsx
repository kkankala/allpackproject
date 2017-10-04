import * as React from 'react';
import * as _ from 'lodash';

const Stars: React.SFC = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    return (
        <div className="col-md-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    )
}

const Button: React.SFC = (props) => {
    return (
        <div className="col-md-2">
            <button>=</button>
        </div>
    )
}

interface AnswerProps {
    selectedNumbers: Number[]
}
const Answer: React.SFC<AnswerProps> = (props) => {
    return (
        <div className="col-md-5">
            {props.selectedNumbers.map((number, i) =>
                <span className="number-span" key={i}>{number}</span>
            )}
        </div>
    )
}


interface NumbersProps {
    selectedNumbers: Number[],
    // selectNumbers:(clickedNumber:Number) => void
}
const Numbers: React.SFC<NumbersProps> = (props) => {
    const arrayOfNumbers = _.range(1, 10);
    // console.log(arrayOfNumbers);
    const numberClassName = (currentNumber: Number): string => {
        if (props.selectedNumbers.indexOf(currentNumber) >= 0) {
            return 'number-span selected';
        }
        return 'number-span';
    }
    return (
        <div className="card text-center">
            {arrayOfNumbers.map((currentNumber, i) =>
                <span className={numberClassName(currentNumber)} key={i}>
                    {currentNumber}
                </span>
            )}
        </div>
    )
    //onClick={props.selectNumbers(currentNumber)}
}
// Numbers.currentList = _.range(1,10);

interface IGameProps {

}
interface IGameState {
    selectedNumbers: Number[]
}
export class Game extends React.Component<any,any> {

    constructor(props: IGameProps) {
        super(props);
    }
    state = {
        selectedNumbers: []
    }

    selectNumber = (clickedNumber: Number) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
    public render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} />
            </div>
        )
        /* selectNumber={this.selectNumber} */
    }
}