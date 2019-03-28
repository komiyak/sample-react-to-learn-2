import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// function component
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

//setInterval(tick, 1000);

// ReactDOM.render(
//     <Welcome name="Sara"/>,
//     document.getElementById('root')
// );

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
