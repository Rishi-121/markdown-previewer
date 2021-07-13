marked.setOptions({
    breaks: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    },
});

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState("");

    return (
        <div className="container text-center">
            <h1 className="p-4">
                <b>My Markdown Previewer</b>
            </h1>
            <textarea
                name="text"
                id="text"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea form-control shadow-sm">
            </textarea>
            <h3 className="mt-5">
                <b>Output</b>
            </h3>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (<article
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer }),
        }}
        id="preview"
        className="markdown-body"
    ></article>);
}

ReactDOM.render(<App />, document.getElementById('root'));