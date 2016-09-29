class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: "", tweets: Immutable.List() };
    }

    handleChange(e) {
        var textValue = e.target.value;
        this.setState({ text: textValue, tweets: this.state.tweets });
    }

    handleKeyDown(e) {
        // エンターキーが押されたときの処理
        if (e.keyCode === 13 && this.state.text !== "") {
            console.log(this.state.text);
            this.setState({ text: "", tweets: this.state.tweets });
        }
    }

    render() {
        return <div>
            <input type="text"
                value={this.state.text}
                placeholder="ツイート"
                onKeyDown={(e) => this.handleKeyDown(e) }
                onChange={(e) => this.handleChange(e) }
                />
            <ul></ul>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));