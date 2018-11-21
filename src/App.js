const React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: this.props.number };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const number = this.state.number;
        this.setState({ number: number + 1 });
    }

    render() {
        return React.createElement('div', { onClick: this.onClick }, this.state.number);
    }
}

module.exports = App;
