class App extends React.Component {
    constructor(props) {
        super(props);

        // ローカルストレージの内容をstateの初期値として使う。
        const storageTweets = Immutable.List(JSON.parse(localStorage.getItem("tweets")));
        this.state = { text: "", tweets: storageTweets };
    }

    // inputの内容が変わったら、textに内容を反映。
    handleChange(e) {
        var textValue = e.target.value;
        this.setState({ text: textValue, tweets: this.state.tweets });
    }

    // keyが押されたとき。
    handleKeyDown(e) {
        // エンターキーが押され、かつ内容が空じゃなかったときの処理
        if (e.keyCode === 13 && this.state.text !== "") {
            // stateのtweetsの末尾に今の内容を追加。
            const newTweet = this.state.tweets.push(this.state.text);
            // ストレージにも反映
            localStorage.setItem("tweets", JSON.stringify(newTweet));
            // stateに反映。
            this.setState({ text: "", tweets: newTweet });
        }
    }

    render() {
        // stateのtweetsをliのlistに変える。
        const tweets = this.state.tweets.reverse().map((tweet) => <li>{tweet}</li>);

        return <div>
            <input type="text"
                value={this.state.text}
                placeholder="ツイート"
                onChange={(e) => this.handleChange(e) }
                onKeyDown={(e) => this.handleKeyDown(e) }
                />
            <ul>{tweets}</ul>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// 消す魔法
// localStorage.clear();
