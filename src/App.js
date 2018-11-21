const React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.setState({ number: 1 });
    }

    onClick() {
        const number = this.state.number;
        this.setState({ number: number + 1 });
    }

    render() {
        return React.createElement('div', { onClick: this.onClick }, this.state.number);
    }
}

module.exports = React.createElement(App, null, null);
